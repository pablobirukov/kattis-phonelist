import { DigitNode } from "./phoneList";
import { dump } from "./dump";

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
                    },
                },
            },
        };
        expect(dump(sampleTree)).toBe(
            `1(0) → 2(1) → 3(2) → 4(3) → ×(5)\n`
            + `5(3) → »(5)`,
        );
    });
});
