/*
 * @Author: 王晓婷 wangxiaoting@4paradigm.com
 * @Date: 2023-07-17 17:42:40
 * @LastEditors: 王晓婷 wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-17 17:44:46
 * @Description: 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。
 */

function isObjectLike(value) {
  return typeof value === "object" && value != null;
}

export default isObjectLike;
