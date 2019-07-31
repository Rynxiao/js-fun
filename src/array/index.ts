/**
 * 
 * @param needle 要检查的值，支持字符串，数字，布尔
 * @param haystack 要被检查的字符串
 * @param strictMode 
 */
export function array_values (array:any):any {
    const func = require('./array_values')
    return func.array_values(array)
}

export function in_array (needle:string|number|boolean, haystack:any, strictMode:boolean = false):boolean {
    const func = require('./in_array')
    return func.in_array(needle, haystack, strictMode)
}
