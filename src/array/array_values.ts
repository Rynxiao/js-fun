/**
 * 使用示例方法为：
 *   import FunArray from '@yioio/ts-fun/funArray'
 *   FunArray.arrayValues(...)
 *
 * 以下参数注释请到src/funArray.ts调用处查看
 * @param needle
 * @param haystack
 * @param strictMode
 *
 * return [] 元组
 */
// arrayValues ( array $array ) : array
export function arrayValues(array: any): any {
  if (array.constructor instanceof Object == false) {
    return [];
  }

  let newArray = [];
  let i = 0;
  for (let key of Object.keys(array)) {
    if (array.hasOwnProperty(key)) {
      newArray[i++] = array[key];
    }
  }

  return newArray;
}
