/*
 * @Author: 王晓婷 wangxiaoting@4paradigm.com
 * @Date: 2023-07-17 17:17:54
 * @LastEditors: 王晓婷 wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-17 17:45:02
 * @Description: 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。
 */

import getTag from "./.internal/getTag";
import isObjectLike from "./isObjectLike";

function isPlainObject(value) {
  if (getTag(value) != "[object Object]" || !isObjectLike(value)) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
}

export default isPlainObject;
