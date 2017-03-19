/// <reference path="./std.d.ts" />

/**
 * Idea:
 * 
 * * for each test case we'll create a hash map (js native Object) where
 * each node represents a digit in a phone number;
 * 
 * * each node is to have `terminal` flag set to `true` if it represents
 * last digit in a phone number;
 * 
 * Thus:
 * 
 * * while we add new phone number digit by digit we are to add new node,
 * otherwise the number is contained by other phone number
 * 
 * * if we reached the node which is `terminal`, we've just found a phone number
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
        // *************** TEST CASE ***************

        rootNode = {};
        let isTestCaseValid = true;
        let numberOfPhones = +readline();
        while (numberOfPhones--) {
            let phoneNumber = readline();
            // ************ PHONE ************
            let currentNodee = rootNode;
            let isNumberValid = false;
            let numberLength = phoneNumber.length;
            let i = 0
            while (i < numberLength) {
                // ************ DIGIT ************
                let digit = phoneNumber[i] as Digit;
                if (!currentNodee[digit]) {
                    var lastNodee: DigitNode = (i === numberLength - 1)
                        ? { terminal: true }
                        : {};
                    currentNodee[digit] = lastNodee;
                    currentNodee = currentNodee[digit]; // REASSIGN
                    isNumberValid = true;
                } else {
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


