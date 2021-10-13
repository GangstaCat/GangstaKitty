"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUsage = exports.isConsecutive = exports.fillArrayWithBounds = exports.min = exports.max = exports.optionalBrackets = void 0;
const globals_1 = require("../globals");
function optionalBrackets(optional = false) {
    return !optional
        ? {
            left: "[",
            right: "]",
        }
        : {
            left: "<",
            right: ">",
        };
}
exports.optionalBrackets = optionalBrackets;
const max = (array) => Math.max(...array);
exports.max = max;
const min = (array) => Math.min(...array);
exports.min = min;
const fillArrayWithBounds = (min, max) => {
    min = min === (Infinity || NaN) ? 0 : min;
    max = max === (Infinity || NaN) ? 100 : max;
    const res = [];
    for (let i = min; i < max; i++)
        res.push(i);
    return res;
};
exports.fillArrayWithBounds = fillArrayWithBounds;
const isConsecutive = (array) => (0, exports.fillArrayWithBounds)((0, exports.min)(array), (0, exports.max)(array)).every((e) => !array.includes(e));
exports.isConsecutive = isConsecutive;
[...Array(100).keys()].map((i) => i + (i + 1)).join(", ");
function generateUsage(command) {
    const flags = formatArgs(command.argParser.args ?? []);
    const args = formatArgs([command.arg] ?? []);
    return `${globals_1.commands.prefixes.custom.first() ?? "!"}${command.name} ${args.join(" ")} ${flags.join(" ")}`;
}
exports.generateUsage = generateUsage;
function formatArgs(args) {
    return args.map((v) => {
        var type = v.type;
        if (v.choices && v.choices.every((v) => !isNaN(parseFloat(v))))
            if (v.choices.includes(Infinity))
                type = `${(0, exports.min)(v.choices) === Infinity ? 0 : (0, exports.min)(v.choices)} ..`;
            else if ((0, exports.isConsecutive)(v.choices))
                type = `${(0, exports.min)(v.choices)}..${(0, exports.max)(v.choices)}`;
        if (v.choices && v.choices.every((v) => typeof v === "string"))
            type = v.choices.join("|");
        var required = v.required;
        if (v.type === "bool") {
            required = false;
            type = undefined;
        }
        const brackets = optionalBrackets(required);
        return `${brackets.left}${(v.prefixes instanceof Set ? Array.from(v.prefixes) : v.prefixes) ?? "-"}${v.name}${type ? `: ${v.consume ? "..." : ""}${type}` : ""}${brackets.right}`;
    });
}
