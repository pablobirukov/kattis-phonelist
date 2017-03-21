import phoneList, { DigitNode } from "./phoneList";
import { dump } from "./dump";

const kattisTestData = [
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
let output = [];
beforeEach(() => {
    let mockIndex = 0;
    (window as any).readline = () => {
        return kattisTestData[mockIndex++];
    };
    output = [];
    (window as any).print = (value: string) => {
        output.push(value);
    };
});

describe("phoneList", () => {
    it("passes Kattis open test", () => {
        phoneList();
        expect(output).toEqual(["NO", "YES"]);
    });
});
