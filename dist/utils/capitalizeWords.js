"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCamelCase = exports.capitalizeWords = exports.CAPITALIZE_REGEX = exports.REMOVE_REGEX = void 0;
exports.REMOVE_REGEX = /_/g;
exports.CAPITALIZE_REGEX = /(^|[ ])./g;
function capitalizeWords(s) {
    return s
        .replace(exports.REMOVE_REGEX, " ")
        .replace(exports.CAPITALIZE_REGEX, (e) => e.toUpperCase());
}
exports.capitalizeWords = capitalizeWords;
function removeCamelCase(s) {
    return s
        .replace(/^./g, (m) => m.toUpperCase())
        .replace(/[A-Z]/g, " $&")
        .substr(1);
}
exports.removeCamelCase = removeCamelCase;
