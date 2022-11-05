/* eslint-disable no-console */
import * as path from 'node:path';
import * as fs from 'node:fs';
import { exec } from 'node:child_process';

const pwd = process.cwd();
const currentDir = './scripts/vue-config';

try {
  // delete react files
  fs.rmSync(path.join(pwd, 'src', 'main.tsx'));
  fs.rmSync(path.join(pwd, 'src', 'App.tsx'));

  const dir = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const file of dir) {
    if (file.isDirectory()) {
      const dir = fs.readdirSync(`${currentDir}/${file.name}`);

      for (const file2 of dir) {
        fs.cpSync(`${currentDir}/${file.name}/${file2}`, path.join(pwd, file.name, file2));
      }
      continue;
    } else if (/use-vue\.ts$/.test(file.name)) { continue; }

    fs.cpSync(`${currentDir}/${file.name}`, path.join(pwd, file.name));
  }

  exec('pnpm i').stdout?.on('data', (data) => {
    console.log(data);
  });
} catch (e) {
  console.error(e);
}
