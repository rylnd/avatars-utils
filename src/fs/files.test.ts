import { filePaths, fileNames } from './';

describe('filePaths', () => {
  it('lists full file paths for files in a directory', () => {
    expect(filePaths('./')).toContain('.gitignore', 'README.md');
  });
});

describe('fileNames', () => {
  it('lists file names in a directory, without extensions', () => {
    expect(fileNames('./')).toContain('README', 'package');
  });
});
