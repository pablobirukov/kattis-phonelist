"use strict";
exports.__esModule = true;
function dump(nodee, level) {
    if (level === void 0) { level = 0; }
    var indent = 8;
    var nextLevel = ++level;
    if (!Object.keys(nodee).length)
        return " \u00BB(" + nextLevel + ") \n";
    if (nodee.terminal)
        return " \u00D7(" + nextLevel + ") \n";
    return Object.keys(nodee).reduce(function (acc, key) {
        return acc + " " + key + "(" + level + ") \u2192 " + dump(nodee[key], nextLevel);
    }, "");
}
exports.dump = dump;
