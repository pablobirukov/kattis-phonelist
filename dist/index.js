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
        // *************** TEST CASE LEVEL ***************
        rootNode = {}; // 1.1
        var isTestCaseValid = true;
        var numberOfPhones_1 = +readline();
        while (numberOfPhones_1--) {
            var phoneNumber_1 = readline();
            if (!isTestCaseValid)
                continue;
            // ************ PHONE NUMBER LEVEL ************
            var currentNode = rootNode;
            var newNodeHasBeenAdded = false;
            var numberLength = phoneNumber_1.length;
            var i = 0;
            while (i < numberLength) {
                // ************ DIGIT LEVEL ************
                var digit = phoneNumber_1[i];
                if (!currentNode[digit]) {
                    var nextNode = { terminal: i === numberLength - 1 }; // 1.2
                    currentNode[digit] = nextNode;
                    currentNode = currentNode[digit]; // Reassign nodes
                    newNodeHasBeenAdded = true;
                }
                else {
                    currentNode = currentNode[digit]; // Reassign nodes
                    if (currentNode.terminal) {
                        isTestCaseValid = false; // 2.2, terminal node found
                        break;
                    }
                }
                i++;
            }
            // ********* NUMBER HAS BEEN HANDLED *********
            if (!newNodeHasBeenAdded) {
                isTestCaseValid = false;
                continue;
            }
        }
        // END OF TEST CASE 
        print(isTestCaseValid ? "YES" : "NO");
    }
}
exports.PhoneList = PhoneList;
