// Copies styles + fonts into dist/ after tsc. Fonts are pulled from the
// npm packages that ship them (fontsource variable fonts + Switzer) so the
// built package is fully self-hosted.
import { cpSync, mkdirSync, copyFileSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'dist');
const require = createRequire(import.meta.url);

// Resolve a font package's own directory via Node's module resolution
// (which walks up through design-system/node_modules to the repo root's)
// instead of assuming node_modules sits next to this script — works whether
// the package was installed locally in design-system/ or hoisted to the
// workspace root.
const pkgDir = (name) => dirname(require.resolve(`${name}/package.json`));

cpSync(join(root, 'src/styles'), join(out, 'styles'), { recursive: true });
mkdirSync(join(out, 'fonts'), { recursive: true });

// Variable fonts: one latin woff2 per family (wghtOnly variant where present).
const variable = [
  ['@fontsource-variable/fraunces', 'fraunces-latin-wght-normal.woff2', 'Fraunces-Variable.woff2'],
  ['@fontsource-variable/bricolage-grotesque', 'bricolage-grotesque-latin-wght-normal.woff2', 'BricolageGrotesque-Variable.woff2'],
  ['@fontsource-variable/cormorant', 'cormorant-latin-wght-normal.woff2', 'Cormorant-Variable.woff2'],
  ['@fontsource-variable/big-shoulders-display', 'big-shoulders-display-latin-wght-normal.woff2', 'BigShouldersDisplay-Variable.woff2'],
  ['@fontsource-variable/space-grotesk', 'space-grotesk-latin-wght-normal.woff2', 'SpaceGrotesk-Variable.woff2'],
];
for (const [pkg, file, dest] of variable) {
  copyFileSync(join(pkgDir(pkg), 'files', file), join(out, 'fonts', dest));
}

// Switzer static weights (300–700) from @carrot-kpi/switzer-font.
const switzerFilesDir = join(pkgDir('@carrot-kpi/switzer-font'), 'files');
const switzerFiles = readdirSync(switzerFilesDir);
const wanted = /switzer-latin-(300|400|500|600|700)-normal\.woff2$/;
for (const f of switzerFiles) {
  if (wanted.test(f)) copyFileSync(join(switzerFilesDir, f), join(out, 'fonts', f));
}

// Flattened stylesheet for consumers (and the design-sync cssEntry): tokens +
// themes + component styles in one file. @font-face rules stay in
// styles/fonts.css so font files resolve relative to it.
const flat = ['tokens.css', 'themes.css', 'components.css']
  .map((f) => readFileSync(join(root, 'src/styles', f), 'utf8'))
  .join('\n');
writeFileSync(join(out, 'index.css'), flat);

console.log('assets copied to dist/');
