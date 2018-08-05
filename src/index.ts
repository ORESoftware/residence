const path = require('path');
const fs = require('fs');

export const findProjectRoot = function findRoot(pth: string, f?: string) : string | null {
  
  f = f || 'package.json';
  
  let possiblePkgDotJsonPath = path.resolve(pth + '/' + f);

  try {
    if (fs.statSync(possiblePkgDotJsonPath).isFile()) {
      return pth;
    }
   
    throw `file at path "${possiblePkgDotJsonPath}" not found, will continue walking up the tree.`
  }
  catch (err) {
    let subPath = path.resolve(pth + '/../');
    if (subPath === pth) {
      return null;
    }
    else {
      return findRoot(subPath);
    }
  }

};
