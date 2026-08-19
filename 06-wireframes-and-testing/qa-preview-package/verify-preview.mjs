import fs from 'node:fs';
import path from 'node:path';

const outputRoot = path.resolve(import.meta.dirname, 'dist');
const required = [
  'index.html',
  'wave-1-auth-kyc-wireframe.html',
  'password-policy.js',
  'assets/YekanBakhFaNum-VF.woff2',
  'preview-manifest.json',
  'robots.txt',
  '_headers'
];

for (const file of required) {
  if (!fs.existsSync(path.join(outputRoot, file))) throw new Error(`Missing output: ${file}`);
}

for (const file of ['index.html', 'wave-1-auth-kyc-wireframe.html']) {
  const source = fs.readFileSync(path.join(outputRoot, file), 'utf8');
  const scripts = [...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
    .map(match => match[1]).join('\n');
  new Function(scripts);
  if (source.includes('../../07-design-system') || source.includes('file:///')) {
    throw new Error(`Local-only reference remains in ${file}`);
  }
  if (!source.includes('./assets/YekanBakhFaNum-VF.woff2')) {
    throw new Error(`Packaged font reference missing in ${file}`);
  }
}

const index = fs.readFileSync(path.join(outputRoot, 'index.html'), 'utf8');
for (const reference of ['./password-policy.js', './wave-1-auth-kyc-wireframe.html']) {
  if (!index.includes(reference)) throw new Error(`Index reference missing: ${reference}`);
}

console.log(JSON.stringify({requiredFiles: required.length, htmlParse: 'pass', localReferences: 0}, null, 2));
