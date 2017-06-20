"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var fs = require('fs');
exports.findProjectRoot = function findRoot(pth) {
    var possiblePkgDotJsonPath = path.resolve(String(pth) + '/package.json');
    try {
        if (fs.statSync(possiblePkgDotJsonPath).isFile()) {
            return pth;
        }
        else {
            throw ' => a "package.json" <i>directory</i>? alrighty then...';
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
