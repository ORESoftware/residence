
const path = require('path');
const fs = require('fs');

module.exports = {

    findProjectRoot: function findRoot(pth) {

        var possiblePkgDotJsonPath = path.resolve(String(pth) + '/package.json');

        try {
            if(fs.statSync(possiblePkgDotJsonPath).isFile()){
              return pth;
            }
           else{
                throw ' => a "package.json" directory? alrighty then...'
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

    }

};