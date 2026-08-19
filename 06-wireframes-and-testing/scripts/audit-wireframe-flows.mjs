import fs from 'node:fs';
import path from 'node:path';

const stageRoot = path.resolve(import.meta.dirname, '..');
const mainPath = path.join(stageRoot, 'artifacts', 'multi-metal-waves-1-and-3-wireframe.html');
const authPath = path.join(stageRoot, 'artifacts', 'wave-1-auth-kyc-wireframe.html');
const main = fs.readFileSync(mainPath, 'utf8');
const auth = fs.readFileSync(authPath, 'utf8');
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function inlineScript(source) {
  const blocks = [...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
    .map(match => match[1])
    .filter(code => code.trim());
  return blocks.join('\n');
}

function uniqueMatches(source, pattern, group = 1) {
  return [...new Set([...source.matchAll(pattern)].map(match => match[group]))];
}

for (const [label, source] of [['main', main], ['auth', auth]]) {
  try {
    new Function(inlineScript(source));
  } catch (error) {
    failures.push(`${label}: JavaScript parse failed: ${error.message}`);
  }
}

const scenarioBlock = main.match(/const scenarios\s*=\s*\[([\s\S]*?)\n\s*\];/);
const scenarioKeys = scenarioBlock ? uniqueMatches(scenarioBlock[1], /\['[^']+','([^']+)'/g) : [];
assert(scenarioKeys.length === 101, `Expected 101 review scenarios; found ${scenarioKeys.length}`);

const renderBlock = main.match(/function render\(\)\s*\{([\s\S]*?)\n\s*\}\n\n\s*function mountPageActions/);
const exactRenderRoutes = renderBlock ? uniqueMatches(renderBlock[1], /state\.scenario===['"]([^'"]+)['"]/g) : [];
const renderable = new Set([...scenarioKeys, ...exactRenderRoutes]);
const literalGoTargets = uniqueMatches(main, /data-go="([^"$]+)"/g);
const literalNavigateTargets = uniqueMatches(main, /navigate\('([^'$]+)'/g).filter(route => !route.endsWith('-'));

for (const route of [...literalGoTargets, ...literalNavigateTargets]) {
  assert(renderable.has(route), `Active destination is not renderable: ${route}`);
}

const clickStart = main.indexOf("document.addEventListener('click'");
const clickEnd = main.indexOf("document.addEventListener('change'", clickStart);
const clickHandler = main.slice(clickStart, clickEnd);
const buttonTags = [...main.matchAll(/<button\b[^>]*>/gi)].map(match => match[0]);
const knownDynamicButtons = [/data-\$\{action\}/, /\$\{attribute\}/];
const inertOrStructural = [/\bdisabled\b/, /\bid=/, /type="submit"/];
const actionlessButtons = buttonTags.filter(tag => {
  if (knownDynamicButtons.some(pattern => pattern.test(tag))) return false;
  if (inertOrStructural.some(pattern => pattern.test(tag))) return false;
  return !/\bdata-[a-z]/.test(tag);
});
assert(actionlessButtons.length === 0, `Found ${actionlessButtons.length} active button(s) without an action contract`);

const interactiveAttributes = uniqueMatches(main, /<button\b[^>]*\bdata-([a-z][a-z0-9-]*)/gi);
const ignoredData = new Set(['copy-label', 'max-digits', 'search']);
for (const attribute of interactiveAttributes) {
  if (ignoredData.has(attribute)) continue;
  const camel = attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  assert(
    clickHandler.includes(`dataset.${camel}`) || clickHandler.includes(`data-${attribute}`),
    `No delegated click handler found for data-${attribute}`
  );
}

for (const contract of [
  "if(state.sheet){closeOverlay();return}",
  "if(e.key==='Escape'&&state.sheet){closeOverlay();return}",
  "state.processingToken===token",
  "state.stack=[];state.scenario='feature-result'",
  "data-receipt=\"r1\"",
  "...discoverExactStateValues(render,'scenario')",
  "['اصلاح کد','go','gift-redeem']"
]) {
  assert(main.includes(contract), `Missing flow contract: ${contract}`);
}

for (const authContract of [
  'const authRoute = window.location.hash.slice(1)',
  'case "back"',
  'case "retry-kyc-check"',
  'data-sheet-action="close"',
  'window.parent.postMessage({ type: "shemsh-auth-complete" }'
]) {
  assert(auth.includes(authContract), `Auth/KYC contract missing: ${authContract}`);
}

const authActionValues = uniqueMatches(auth, /data-action="([^"$]+)"/g);
const authCases = new Set(uniqueMatches(auth, /case\s+"([^"]+)"/g));
for (const action of authActionValues) {
  assert(authCases.has(action), `Auth/KYC action has no switch destination: ${action}`);
}

const report = {
  scenarios: scenarioKeys.length,
  exactRenderRoutes: exactRenderRoutes.length,
  activeDestinationCount: new Set([...literalGoTargets, ...literalNavigateTargets]).size,
  interactiveActionAttributes: interactiveAttributes.length,
  authActionCount: authActionValues.length,
  actionlessButtons: actionlessButtons.length,
  failures
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
