/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-07-13 17:08:36
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-13 21:31:28
 */

import isSymbol from "./isSymbol";

const symbolToSting = Symbol.prototype.toString;

const INFINITY = 1 / 0;

const baseToString = (value) => {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(baseToString);
  }
  if (isSymbol(value)) {
    return symbolToSting ? symbolToSting(value) : "";
  }
  const result = `${value}`;
  return result === "0" && 1 / value === -INFINITY ? "-0" : result;
};

export default baseToString;
