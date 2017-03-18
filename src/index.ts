/// <reference path="./std.d.ts" />

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type Nodee = {
    0?: Nodee;
    1?: Nodee;
    2?: Nodee;
    3?: Nodee;
    4?: Nodee;
    5?: Nodee;
    6?: Nodee;
    7?: Nodee;
    8?: Nodee;
    9?: Nodee;
    terminal?: boolean;
}
let numberOftestCases
let numberOfPhones
let phoneNumber
let nodee: Nodee

export function PhoneList() {
    let numberOftestCases = +readline()
    while (numberOftestCases--) {
        // *************** TEST CASE ***************

        nodee = { }
        let isTestCaseValid = true
        let numberOfPhones = +readline()
        while (numberOfPhones--) {
            let phoneNumber = readline()
            // ************ PHONE ************
            let currentNodee: Nodee = nodee
            let isNumberValid = false
            let numberLength = phoneNumber.length
            let i = 0
            while (i < numberLength) {
                // ************ DIGIT ************
                let digit = phoneNumber[i] as Digit
                if (!currentNodee[digit]) {
                    var lastNodee: Nodee = (i === numberLength - 1) 
                        ? {terminal: true }
                        : {};
                    currentNodee[digit] = lastNodee
                    currentNodee = currentNodee[digit] // REASSIGN
                    isNumberValid = true
                } else {
                    currentNodee = currentNodee[digit]
                    if (currentNodee.terminal) {
                        isTestCaseValid = false;
                    } 
                }
                i++
            }
            // ********* NUMBER HAS BEEN HANDLED *********
            if (!isNumberValid) {
                isTestCaseValid = false
            }
        }
        // END OF TEST CASE 
        print(isTestCaseValid ? "YES" : "NO")
    }
}

export function dump(nodee: Nodee, level = 0): string {
    const indent = 8;
    const nextLevel = ++level;
    if (!Object.keys(nodee).length) return ` »(${nextLevel}) \n`;
    if (nodee.terminal) return ` ×(${nextLevel}) \n`;
    return Object.keys(nodee).reduce((acc, key) => {
        return `${acc} ${key}(${level}) → ${dump(nodee[key], nextLevel)}`;
    }, "")
}

