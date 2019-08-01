import * as arrayValuesFunc from './array_values';
import * as inArrayFunc from './in_array';

/**
 *
 * @param needle 要检查的值，支持字符串，数字，布尔
 * @param haystack 要被检查的字符串
 * @param strictMode
 */
export function arrayValues(array: any): any {
  return arrayValuesFunc.arrayValues(array);
}

export function inArray(
  needle: string | number | boolean,
  haystack: any,
  strictMode: boolean = false
): boolean {
  return inArrayFunc.inArray(needle, haystack, strictMode);
}
