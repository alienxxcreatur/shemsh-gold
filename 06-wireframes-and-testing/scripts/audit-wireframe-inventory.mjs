import fs from 'node:fs';
import path from 'node:path';

const stageRoot = path.resolve(import.meta.dirname, '..');
const source = fs.readFileSync(path.join(stageRoot, 'artifacts', 'multi-metal-waves-1-and-3-wireframe.html'), 'utf8');
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const unique = values => [...new Set(values)];
const matches = (text, pattern, group = 1) => unique([...text.matchAll(pattern)].map(match => match[group]));

function literal(name, followingToken = ';') {
  const declaration = new RegExp(`const\\s+${name}\\s*=\\s*`, 'g');
  const match = declaration.exec(source);
  const start = match?.index ?? -1;
  assert(start >= 0, `Literal not found: ${name}`);
  if (start < 0) return null;
  const valueStart = declaration.lastIndex;
  const end = source.indexOf(followingToken, valueStart);
  assert(end >= 0, `Literal terminator not found: ${name}`);
  if (end < 0) return null;
  return Function(`"use strict"; return (${source.slice(valueStart, end)});`)();
}

const scenarios = literal('scenarios');
const scenarioGroups = literal('scenarioGroups');
const reviewSheets = literal('reviewSheets');
const overlayPairs = Function(`"use strict"; return (${source.match(/const scenarioOverlayMap=new Map\((\[[\s\S]*?\])\);/)?.[1] || '[]'});`)();
const overlayMap = new Map(overlayPairs);

const renderSource = source.match(/function render\(\)\s*\{([\s\S]*?)\n\s*\}\n\n\s*function mountPageActions/)?.[1] || '';
const overlaySource = source.match(/function overlay\([^)]*\)\s*\{([\s\S]*?)\n\s*\}\n\s*function render\(\)/)?.[1] || '';
const renderRoutes = matches(renderSource, /state\.scenario\s*===\s*['"]([^'"]+)['"]/g);
const overlayRoutes = unique([...reviewSheets, ...matches(overlaySource, /state\.sheet\s*===\s*['"]([^'"]+)['"]/g)]);
const scenarioKeys = scenarios.map(([, key]) => key);
const scenarioIds = scenarios.map(([id]) => id);
const registeredRoutes = new Set(scenarioKeys);
const registeredSheets = new Set(overlayMap.values());
const extraPages = renderRoutes.filter(route => !registeredRoutes.has(route));
const extraOverlays = overlayRoutes.filter(sheet => !registeredSheets.has(sheet));
const scenarioItems = scenarios.map(([id, key, label]) => ({
  id, key, label,
  type: overlayMap.has(key) ? 'overlay' : id.startsWith('WF-ST-') ? 'state' : 'page'
}));
const inventory = [
  ...scenarioItems,
  ...extraPages.map(route => ({id: route, key: route, label: '', type: 'page'})),
  ...extraOverlays.map(sheet => ({id: sheet, key: `overlay:${sheet}`, label: '', type: 'overlay'}))
];
const counts = inventory.reduce((result, item) => {
  result.total++;
  result[item.type]++;
  return result;
}, {total: 0, page: 0, state: 0, overlay: 0});
const groupedKeys = scenarioGroups.flatMap(group => group.keys);

assert(scenarios.length === 101, `Expected 101 manual scenarios; found ${scenarios.length}`);
assert(new Set(scenarioKeys).size === scenarioKeys.length, 'Duplicate scenario key found');
assert(new Set(scenarioIds).size === scenarioIds.length, 'Duplicate scenario ID found');
assert(groupedKeys.length === scenarioKeys.length, `Group membership count mismatch: ${groupedKeys.length}/${scenarioKeys.length}`);
assert(new Set(groupedKeys).size === groupedKeys.length, 'A scenario belongs to more than one group');
for (const key of scenarioKeys) assert(groupedKeys.includes(key), `Scenario missing from groups: ${key}`);
assert(new Set(inventory.map(item => item.key)).size === inventory.length, 'Duplicate inventory key found');
assert(counts.total === 147, `Expected 147 inventory views; found ${counts.total}`);
assert(counts.page === 77, `Expected 77 pages; found ${counts.page}`);
assert(counts.state === 53, `Expected 53 states; found ${counts.state}`);
assert(counts.overlay === 17, `Expected 17 overlays; found ${counts.overlay}`);

const report = {
  counts,
  manualScenarios: scenarios.length,
  groups: scenarioGroups.map(group => ({id: group.id, label: group.label, count: group.keys.length})),
  scenarios: scenarioGroups.map(group => ({
    id: group.id,
    label: group.label,
    items: group.keys.map(key => {
      const [id, , label] = scenarios.find(([, scenarioKey]) => scenarioKey === key);
      return {id, key, label};
    })
  })),
  extraPages,
  extraOverlays,
  scenarioOverlays: [...overlayMap.entries()].map(([scenario, sheet]) => ({scenario, sheet})),
  failures
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
