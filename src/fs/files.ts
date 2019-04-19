import fs from 'fs';
import path from 'path';

export const files: (dir: string) => string[] = dir => fs.readdirSync(dir);

export const fileNames: (dir: string) => string[] = dir =>
  files(dir).map(nameWithExtension => nameWithExtension.replace(/\.\w+$/, ''));

export const filePaths: (dir: string) => string[] = dir =>
  files(dir).map(file => path.join(dir, file));
