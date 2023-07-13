/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-07-13 17:34:27
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-13 17:39:47
 */

const toString = Object.prototype.toString;

const getTag = (value) => {
  if (value == null) {
    return typeof value === "undefined"
      ? "[object Undefined]"
      : "[object Null]";
  }
  return toString.call(value);
};

export default getTag;
