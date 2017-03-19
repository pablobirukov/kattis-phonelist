import { DigitNode } from ".";

export function dump(nodee: DigitNode, level = 0): string {
    const indent = 8;
    const nextLevel = ++level;
    if (!Object.keys(nodee).length) return ` »(${nextLevel}) \n`;
    if (nodee.terminal) return ` ×(${nextLevel}) \n`;
    return Object.keys(nodee).reduce((acc, key) => {
        return `${acc} ${key}(${level}) → ${dump(nodee[key], nextLevel)}`;
    }, "");
}
