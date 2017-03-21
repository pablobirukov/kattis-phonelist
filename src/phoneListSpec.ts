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

describe("dump", () => {
    const s: DigitNode = {
        1: {
            2: { 3: { 4: { 5: {} } } },
            8: { 9: { terminal: true } },
        },
        9: {
            1: {
                1: {
                    terminal: true,
                },
            },
        },
    };
    it("shows non-terminal branch", () => {
        const sampleTree: DigitNode = { 1: { 2: { 3: { 4: {} } } } };
        expect(dump(sampleTree)).toBe("1(0) → 2(1) → 3(2) → 4(3) → »(5)");
    });

    it("shows terminal branch", () => {
        const sampleTree: DigitNode = { 1: { 2: { 3: { 4: { terminal: true } } } } };
        expect(dump(sampleTree)).toBe("1(0) → 2(1) → 3(2) → 4(3) → ×(5)");
    });

    it("correctly shows two pathes", () => {
        const sampleTree: DigitNode = {
            1: {
                2: {
                    3: {
                        4: { terminal: true },
                        5: {},
                    } } } };
        expect(dump(sampleTree)).toBe(
            `1(0) → 2(1) → 3(2) → 4(3) → ×(5)\n`
            + `5(3) → »(5)`,
        );
    });
});
