"use strict";
exports.__esModule = true;
/// <reference path="./std.d.ts" />
var index_1 = require("./index");
var mock = [
    "2",
    "3",
    "911",
    "97625999",
    "91125426",
    "5",
    "113",
    "12340",
    "123440",
    "12345",
    "98346",
];
var output = [];
beforeEach(function () {
    var mockIndex = 0;
    window.readline = function () {
        return mock[mockIndex++];
    };
    output = [];
    window.print = function (value) {
        output.push(value);
    };
});
describe("PhoneList", function () {
    it("is defined", function () {
        index_1.PhoneList();
        expect(output).toEqual(["NO", "YES"]);
        // expect(PhoneList).toBeDefined();
    });
});
// describe("Dump", () => {
//     const s: Nodee = {
//         1: { 
//             2: { 3: { 4: { 5: { } } } },
//             8: { 9: { terminal: true}}
//         },
//         9: {
//             1: {
//                 1: {
//                     terminal: true,
//                 }
//             }
//         }
//     }
//     it("works", () => {
//         console.log(dump(s))
//         // expect(output).toEqual(["NO", "YES"])
//         // expect(PhoneList).toBeDefined();
//     })
// }); 
