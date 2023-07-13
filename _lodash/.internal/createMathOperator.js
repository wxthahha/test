/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-07-13 16:31:59
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-13 17:10:42
 * @Description: createMathOperator
 */

import baseToNumber from "./baseToNumber";
import baseToString from "./baseToString";

const createMathOperator = (operator, defaultValue) => {
  return (value, other) => {
    if (value === undefined && other === undefined) {
      return defaultValue;
    }
    if (value === undefined && other !== undefined) {
      return other;
    }
    if (value !== undefined && other === undefined) {
      return value;
    }
    if (typeof value === "string" || typeof other === "string") {
      value = baseToString(value);
      other = baseToString(other);
    } else {
      value = baseToNumber(value);
      other = baseToNumber(other);
    }
    return operator(value, other);
  };
};

export default createMathOperator;
