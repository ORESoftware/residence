const path = require('path');
const fs = require('fs');

export const findProjectRoot = function findRoot(pth: string) : string | null {

  var possiblePkgDotJsonPath = path.resolve(String(pth) + '/package.json');

  try {
    if (fs.statSync(possiblePkgDotJsonPath).isFile()) {
      return pth;
    }
    else {
      throw ' => a "package.json" <i>directory</i>...? alrighty then...'
    }
  }
  catch (err) {
    var subPath = path.resolve(String(pth) + '/../');
    if (subPath === pth) {
      return null;
    }
    else {
      return findRoot(subPath);
    }
  }

};