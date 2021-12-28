import * as decribe from 'src/git-version/git-version.json';

export const versionInfo = (() => {
    try {
      // tslint:disable-next-line:no-var-requires
      return decribe;
      // return require('src/git-version/git-version.json');
    } catch {
      // In dev the file might not exist:
      return { tag: 'v0.0.0', hash: 'dev' };
    }
  })(); 