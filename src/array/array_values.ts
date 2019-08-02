/**
 * 使用示例方法为：
 *   import FunArray from '@yioio/ts-fun/funArray'
 *   FunArray.arrayValues(...)
 *
 * 以下参数注释请到src/funArray.ts调用处查看
 *
 * return [] 元组
 * @param array
 */
import {BasicType, TupleLike} from '../type';

// arrayValues ( array $array ) : array
export function arrayValues(array: TupleLike<BasicType>): any[] {
  if (Array.isArray(array)) {
    return array;
  } else {
    return Object.values(array);
  }
}
