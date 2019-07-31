"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param needle 要检查的值，支持字符串，数字，布尔
 * @param haystack 要被检查的字符串
 * @param strictMode
 */
function array_values(array) {
    const func = require('./array_values');
    return func.array_values(array);
}
exports.array_values = array_values;
function in_array(needle, haystack, strictMode = false) {
    const func = require('./in_array');
    return func.in_array(needle, haystack, strictMode);
}
exports.in_array = in_array;
