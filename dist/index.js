/// <reference path="./std.d.ts" />
"use strict";
exports.__esModule = true;
var numberOftestCases;
var numberOfPhones;
var phoneNumber;
var rootNode;
function PhoneList() {
    var numberOftestCases = +readline();
    while (numberOftestCases--) {
        // *************** TEST CASE ***************
        rootNode = {};
        var isTestCaseValid = true;
        var numberOfPhones_1 = +readline();
        while (numberOfPhones_1--) {
            var phoneNumber_1 = readline();
            // ************ PHONE ************
            var currentNodee = rootNode;
            var isNumberValid = false;
            var numberLength = phoneNumber_1.length;
            var i = 0;
            while (i < numberLength) {
                // ************ DIGIT ************
                var digit = phoneNumber_1[i];
                if (!currentNodee[digit]) {
                    var lastNodee = (i === numberLength - 1)
                        ? { terminal: true }
                        : {};
                    currentNodee[digit] = lastNodee;
                    currentNodee = currentNodee[digit]; // REASSIGN
                    isNumberValid = true;
                }
                else {
                    currentNodee = currentNodee[digit];
                    if (currentNodee.terminal) {
                        isTestCaseValid = false;
                    }
                }
                i++;
            }
            // ********* NUMBER HAS BEEN HANDLED *********
            if (!isNumberValid) {
                isTestCaseValid = false;
                continue;
            }
        }
        // END OF TEST CASE 
        print(isTestCaseValid ? "YES" : "NO");
    }
}
exports.PhoneList = PhoneList;
