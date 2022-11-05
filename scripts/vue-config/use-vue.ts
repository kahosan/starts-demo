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

  const dir = fs.readdirSync(currentDir);

  for (const file of dir) {
    if (/use-vue\.ts$/.test(file)) { continue; }
    switch (file) {
      case 'App.vue':{
        fs.cpSync(path.join(pwd, currentDir, file), path.join(pwd, 'src', file));
        break;
      }
      case 'main.ts': {
        fs.cpSync(path.join(pwd, currentDir, file), path.join(pwd, 'src', file));
        break;
      }
      case 'vite-env.d.ts': {
        fs.cpSync(path.join(pwd, currentDir, file), path.join(pwd, 'src', file));
        break;
      }
      default: {
        fs.cpSync(path.join(pwd, currentDir, file), path.join(pwd, file));
      }
    }
  }

  exec('pnpm i').stdout?.on('data', (data) => {
    console.log(data);
  });
} catch (e) {
  console.error(e);
}
