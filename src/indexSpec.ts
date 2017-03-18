/// <reference path="./std.d.ts" />
import { PhoneList, dump, Nodee } from "./index";

const mock = [
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
]
let output = []
beforeEach(() => {
    let mockIndex = 0;
    (window as any).readline = () => {
        return mock[mockIndex++]
    }
    output = [];
    (window as any).print = (value: string) => {
        output.push(value)
    }
})

describe("PhoneList", () => {
   
    it("is defined", () => {
        PhoneList()
        expect(output).toEqual(["NO", "YES"])
        // expect(PhoneList).toBeDefined();
    })
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