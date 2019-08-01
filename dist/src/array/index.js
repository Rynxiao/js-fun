"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayValuesFunc = require("./array_values");
const inArrayFunc = require("./in_array");
/**
 *
 * @param needle 要检查的值，支持字符串，数字，布尔
 * @param haystack 要被检查的字符串
 * @param strictMode
 */
function arrayValues(array) {
    return arrayValuesFunc.arrayValues(array);
}
exports.arrayValues = arrayValues;
function inArray(needle, haystack, strictMode = false) {
    const func = require('./inArray');
    return inArrayFunc.inArray(needle, haystack, strictMode);
}
exports.inArray = inArray;
