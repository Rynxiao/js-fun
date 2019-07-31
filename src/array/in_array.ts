
/**
 * 使用示例方法为：
 *   import FunArray from '@yioio/ts-fun/funArray'
 *   FunArray.in_array(xxx)
 * 
 * 以下参数注释请到src/funArray.ts调用处查看
 * @param needle 
 * @param haystack 
 * @param strictMode 
 * 
 * return boolean
 */
export function in_array (needle:string|number|boolean, haystack:any, strictMode:boolean = false):boolean {

    let newHayStack = []
    if (haystack.constructor === Object) {
        const _array_values = require('./array_values')
        newHayStack = _array_values.array_values(haystack)
    } else if (haystack.constructor === Array) {
        newHayStack = haystack
    } else {
        return false
    }

    let ret:boolean = newHayStack.includes(needle)

    if (ret == true) {
        //配置 (3.1, [3.1]) ("3.1", ["3.1"]) ("a", ["a"])
        return true
    }
    
    if (strictMode == false) {
        //配置 ("3.1", [3.1]) 
        //代码走到这一行，表示可能是needle作为数字在元组中找不到
        ret = newHayStack.includes(+needle)
        if (ret == true) {
            return true
        }
        
        //配置 (3.1, ["3.1"])
        //代码走到这一行，表示可能是数字needle作为字符串在元组中找不到   
        ret = newHayStack.includes(`${needle}`)
        if (ret == true) {
            return true
        }
    }

    return false
}

export const _depends:string[] = [
    "array_values"
]
