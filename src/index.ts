/// <reference path="./std.d.ts" />

/**
 * 1. Idea:
 * 
 * 1.1 for each test case we'll create a hash map (js native Object) where
 * each node represents a digit in a phone number;
 * 
 * 1.2 each node is to have `terminal` flag set to `true` if it represents
 * last digit in a phone number;
 * 
 * 2. Thus:
 * 
 * 2.1 while we add new phone number digit by digit we are to add new node,
 * otherwise the number is contained by other phone number
 * 
 * 2.2 if we reached the node which is `terminal`, we've just found a phone number
 * contained by number which is being added now
 * 
 */


type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type DigitNode = {
    0?: DigitNode;
    1?: DigitNode;
    2?: DigitNode;
    3?: DigitNode;
    4?: DigitNode;
    5?: DigitNode;
    6?: DigitNode;
    7?: DigitNode;
    8?: DigitNode;
    9?: DigitNode;
    terminal?: boolean;
}
let numberOftestCases
let numberOfPhones
let phoneNumber
let rootNode: DigitNode

export function PhoneList() {
    let numberOftestCases = +readline();
    while (numberOftestCases--) {
        // *************** TEST CASE LEVEL ***************

        rootNode = {}; // 1.1
        let isTestCaseValid = true;
        let numberOfPhones = +readline();
        while (numberOfPhones--) {
            let phoneNumber = readline();
            if (!isTestCaseValid) continue;
            // ************ PHONE NUMBER LEVEL ************
            let currentNode = rootNode;
            let newNodeHasBeenAdded = false;
            let numberLength = phoneNumber.length;
            let i = 0
            while (i < numberLength) {
                // ************ DIGIT LEVEL ************
                let digit = phoneNumber[i] as Digit;
                if (!currentNode[digit]) {
                    var nextNode: DigitNode = { terminal: i === numberLength - 1 }; // 1.2
                    currentNode[digit] = nextNode;
                    currentNode = currentNode[digit]; // Reassign nodes
                    newNodeHasBeenAdded = true;
                } else {
                    currentNode = currentNode[digit]; // Reassign nodes
                    if (currentNode.terminal) {
                        isTestCaseValid = false; // 2.2, terminal node found
                        break;
                    }
                }
                i++;
            }
            // ********* NUMBER HAS BEEN HANDLED *********
            if (!newNodeHasBeenAdded) { // 2.1
                isTestCaseValid = false;
                continue;
            }
        }
        // END OF TEST CASE 
        print(isTestCaseValid ? "YES" : "NO");
    }
}


