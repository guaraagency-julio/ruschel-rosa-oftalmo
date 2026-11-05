import { cp, copyFile, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const output = join(root, 'dist');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'robots.txt', '_headers']) {
  await copyFile(join(root, file), join(output, file));
}
await cp(join(root, 'assets'), join(output, 'assets'), { recursive: true });
console.log('Site estático preparado para Cloudflare Workers em dist/.');
