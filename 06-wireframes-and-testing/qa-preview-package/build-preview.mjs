import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const packageRoot = path.resolve(import.meta.dirname);
const stageRoot = path.resolve(packageRoot, '..');
const projectRoot = path.resolve(stageRoot, '..');
const outputRoot = path.resolve(packageRoot, 'dist');
const artifactsRoot = path.join(stageRoot, 'artifacts');
const fontSource = path.join(
  projectRoot,
  '07-design-system',
  'legacy-brand',
  'typogaphy',
  'YekanBakh3 - Pro  Plus',
  'Yekan Bakh Variable',
  'webfonts',
  'YekanBakhFaNum-VF.woff2'
);

const sources = {
  main: path.join(artifactsRoot, 'multi-metal-waves-1-and-3-wireframe.html'),
  auth: path.join(artifactsRoot, 'wave-1-auth-kyc-wireframe.html'),
  passwordPolicy: path.join(artifactsRoot, 'password-policy.js'),
  font: fontSource
};

for (const [name, source] of Object.entries(sources)) {
  if (!fs.existsSync(source)) throw new Error(`Missing preview source: ${name} (${source})`);
}

const expectedParent = path.resolve(packageRoot);
if (path.dirname(outputRoot) !== expectedParent || path.basename(outputRoot) !== 'dist') {
  throw new Error(`Unsafe output directory: ${outputRoot}`);
}

fs.rmSync(outputRoot, {recursive: true, force: true});
fs.mkdirSync(path.join(outputRoot, 'assets'), {recursive: true});

const fontPattern = /\.\.\/\.\.\/07-design-system\/legacy-brand\/typogaphy\/YekanBakh3%20-%20Pro%20%20Plus\/Yekan%20Bakh%20Variable\/webfonts\/YekanBakhFaNum-VF\.woff2/g;
const prepareHtml = source => {
  const html = fs.readFileSync(source, 'utf8');
  const prepared = html.replace(fontPattern, './assets/YekanBakhFaNum-VF.woff2');
  if (prepared === html) throw new Error(`Font path was not found in ${source}`);
  return prepared;
};

fs.writeFileSync(path.join(outputRoot, 'index.html'), prepareHtml(sources.main));
fs.writeFileSync(path.join(outputRoot, 'wave-1-auth-kyc-wireframe.html'), prepareHtml(sources.auth));
fs.copyFileSync(sources.passwordPolicy, path.join(outputRoot, 'password-policy.js'));
fs.copyFileSync(sources.font, path.join(outputRoot, 'assets', 'YekanBakhFaNum-VF.woff2'));
fs.writeFileSync(path.join(outputRoot, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
fs.writeFileSync(path.join(outputRoot, '_headers'), '/*\n  Cache-Control: no-store\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: no-referrer\n');

const outputFiles = [
  'index.html',
  'wave-1-auth-kyc-wireframe.html',
  'password-policy.js',
  'assets/YekanBakhFaNum-VF.woff2',
  'robots.txt',
  '_headers'
];
const manifest = {
  generatedAt: new Date().toISOString(),
  source: path.relative(projectRoot, sources.main).replaceAll('\\', '/'),
  entry: 'index.html',
  overview: 'index.html?overview=1',
  files: outputFiles.map(file => {
    const body = fs.readFileSync(path.join(outputRoot, file));
    return {file, bytes: body.length, sha256: crypto.createHash('sha256').update(body).digest('hex')};
  })
};
fs.writeFileSync(path.join(outputRoot, 'preview-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(JSON.stringify({outputRoot, files: outputFiles.length + 1, source: manifest.source}, null, 2));
