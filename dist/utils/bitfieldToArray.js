"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bitfieldToArray = void 0;
function bitfieldToArray(bitfield, array) {
    bitfield = BigInt(bitfield);
    return array.filter((_, i) => {
        const current = BigInt(1 << i);
        return (bitfield & current) === current;
    });
}
exports.bitfieldToArray = bitfieldToArray;
