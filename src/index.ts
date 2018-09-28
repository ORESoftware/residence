'use strict';

import * as path from 'path';
import * as fs from 'fs';


export const r2gSmokeTest = () => {
  return true;
};

export const findRootDir = (pth: string, f: string): string => {

  let possiblePkgDotJsonPath = path.resolve(pth + '/' + f);

  try {
    if (fs.statSync(possiblePkgDotJsonPath).isFile()) {
      return pth;
    }
  }
  catch (err) {
    // ignore
  }

  let subPath = path.resolve(pth + '/../');

  if (subPath === pth) {
    return null;
  }

  return findRootDir(subPath, f);

};

export const findProjectRoot = (pth: string): string => {
  return findRootDir(pth, 'package.json');
};
