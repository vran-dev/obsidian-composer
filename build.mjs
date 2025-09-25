import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const settingsPath = path.join(root, 'settings.yml');
const cssPath = path.join(root, 'composer.css');
const outPath = path.join(root, 'theme.css');

async function main() {
  if (!existsSync(settingsPath)) throw new Error('settings.yml not found');
  if (!existsSync(cssPath)) throw new Error('composer.css not found');

  const settingsRaw = await readFile(settingsPath, 'utf8');
  const cssRaw = await readFile(cssPath, 'utf8');

  // Wrap YAML back into the annotated comment Obsidian Style Settings expects
  const header = '/* @settings\n' + settingsRaw.trimEnd() + '\n*/\n\n';

  const output = header + cssRaw.replace(/^[\s\n]*\/\*.*?\*\/\n+/, '');

  await writeFile(outPath, output, 'utf8');
  console.log('theme.css generated');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
