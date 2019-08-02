import * as arrayValuesFunc from './array_values';
import * as inArrayFunc from './in_array';
import {BasicType, TupleLike} from '../type';

/**
 *
 * @param array
 */
export function arrayValues(array: TupleLike<BasicType>): any[] {
  return arrayValuesFunc.arrayValues(array);
}

export function inArray(
  needle: string | number | boolean,
  haystack: any,
  strictMode: boolean = false
): boolean {
  return inArrayFunc.inArray(needle, haystack, strictMode);
}
