/// <reference path="./std.d.ts" />
"use strict";
exports.__esModule = true;
var numberOftestCases;
var numberOfPhones;
var phoneNumber;
var nodee;
function PhoneList() {
    var numberOftestCases = +readline();
    while (numberOftestCases--) {
        // *************** TEST CASE ***************
        nodee = {};
        var isTestCaseValid = true;
        var numberOfPhones_1 = +readline();
        while (numberOfPhones_1--) {
            var phoneNumber_1 = readline();
            // ************ PHONE ************
            var currentNodee = nodee;
            var isNumberValid = false;
            var numberLength = phoneNumber_1.length;
            var i = 0;
            while (i < numberLength) {
                console.log("B:", dump(nodee), currentNodee);
                // ************ DIGIT ************
                var digit = phoneNumber_1[i];
                if (!currentNodee[digit]) {
                    var lastNodee = (i === numberLength - 1)
                        ? { terminal: true }
                        : {};
                    if (i === numberLength - 1) {
                        console.log("marking " + digit + " in " + phoneNumber_1 + "[" + i + "] as terminal");
                    }
                    currentNodee[digit] = lastNodee;
                    currentNodee = currentNodee[digit]; // REASSIGN
                    isNumberValid = true;
                }
                else {
                    currentNodee = currentNodee[digit];
                    if (currentNodee.terminal) {
                        console.log("isTestCaseValid: " + digit + " in " + phoneNumber_1 + "[" + i + "] is terminal");
                        isTestCaseValid = false;
                    }
                }
                i++;
                console.log("A:", dump(nodee));
            }
            // ********* NUMBER HAS BEEN HANDLED *********
            if (!isNumberValid) {
                isTestCaseValid = false;
            }
        }
        // END OF TEST CASE 
        print(isTestCaseValid ? "YES" : "NO");
    }
}
exports.PhoneList = PhoneList;
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
