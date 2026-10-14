import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
await mkdir('dist/assets', { recursive: true });
await Promise.all(['index.html', 'app.js', 'mobile.css'].map(file => copyFile(file, `dist/${file}`)));
await copyFile('assets/reference.jpg', 'dist/assets/reference.jpg');
const source = await readFile('desktop.css', 'utf8');
// The reference's paper canvas is 654 px wide. Container units preserve its ratios.
const responsive = source.replace(/(-?\d*\.?\d+)px/g, (_, n) => `${(Number(n) / 654 * 100).toFixed(6)}cqw`);
await writeFile('dist/desktop.css', responsive);
console.log('Built static site in dist/');
