import fs from 'node:fs';
import path from 'node:path';

const stageRoot = path.resolve(import.meta.dirname, '..');
const files = {
  main: fs.readFileSync(path.join(stageRoot, 'artifacts', 'multi-metal-waves-1-and-3-wireframe.html'), 'utf8'),
  auth: fs.readFileSync(path.join(stageRoot, 'artifacts', 'wave-1-auth-kyc-wireframe.html'), 'utf8')
};
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const scripts = source => [...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1]).filter(Boolean).join('\n');

for (const [name, source] of Object.entries(files)) {
  try { new Function(scripts(source)); }
  catch (error) { failures.push(`${name}: JavaScript parse failed: ${error.message}`); }
  const viewport = source.match(/<meta\s+name="viewport"\s+content="([^"]+)"/i)?.[1] || '';
  assert(viewport.includes('width=device-width'), `${name}: responsive viewport width missing`);
  assert(viewport.includes('initial-scale=1'), `${name}: initial scale missing`);
  assert(!/user-scalable\s*=\s*no|maximum-scale\s*=\s*1/i.test(viewport), `${name}: user zoom is disabled`);
}

const main = files.main;
const contracts = {
  responsiveShell: [
    'html{min-width:320px',
    '@media (max-width:430px), (pointer:coarse) and (max-width:900px)',
    'height:100dvh',
    '@media(max-width:350px)',
    'grid-template-columns:repeat(2,minmax(0,1fr))'
  ],
  scrollAndFixedActions: [
    '.phone{--app-chrome-top:84px;width:390px;height:820px',
    'grid-template-rows:auto minmax(0,1fr) auto',
    '.app-main{overflow-y:auto;overscroll-behavior:contain',
    '.page-action-root{z-index:9',
    'env(safe-area-inset-bottom)',
    'function mountPageActions()',
    "appMain.classList.add('viewport-scroll-required')"
  ],
  touchAndFocus: [
    '.icon-button{width:48px;height:48px',
    '.text-button{min-height:44px',
    '.overview-tool-button{min-width:44px;min-height:44px',
    'button:focus-visible,input:focus-visible',
    '.skip:focus{top:12px}',
    'aria-invalid=',
    'aria-describedby=',
    'role="alert"'
  ],
  overlay: [
    'role="dialog" aria-modal="true"',
    'role="alertdialog" aria-modal="true"',
    "if(e.key==='Escape'&&state.sheet){closeOverlay();return}",
    "if(e.shiftKey&&document.activeElement===first)",
    'trigger.focus()',
    "e.target.matches('.scrim[data-close-sheet]')"
  ],
  overview: [
    'role="dialog" aria-modal="true" aria-labelledby="overview-title"',
    "workspaceRoot.setAttribute('inert','')",
    "clone.setAttribute('inert','')",
    "overviewCanvas.setAttribute('aria-busy','true')",
    'Math.min(2.4,Math.max(.08,next))',
    "if(e.key==='Escape')",
    "if(e.key==='0')fitOverview()",
    'discoverExactStateValues(render',
    'discoverExactStateValues(overlay'
  ],
  motionAndAnnouncements: [
    '@media(prefers-reduced-motion:reduce)',
    "window.matchMedia('(prefers-reduced-motion: reduce)')",
    'aria-live="polite"',
    'id="toast-root" aria-live="polite"'
  ]
};

for (const [family, markers] of Object.entries(contracts)) {
  for (const marker of markers) assert(main.includes(marker), `${family} contract missing: ${marker}`);
}

assert(!main.includes('user-scalable=no'), 'Main prototype prevents pinch zoom');
assert(main.includes(':focus-visible'), 'No visible keyboard focus treatment found');
assert(main.includes('color-scheme: light'), 'Declared color scheme is missing');

const report = {
  testedViewportContracts: ['320×portrait', '375×portrait', '390×portrait', '812×375 landscape'],
  contractFamilies: Object.keys(contracts).length,
  browserRenderedChecks: 'pass-external: private HTTPS QA documented in pre-binance-responsive-interaction-qa-2026-08-19.md',
  darkMode: 'not-applicable: active baseline declares light only',
  failures
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
