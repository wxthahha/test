/*
 * @Author: 王晓婷 wangxiaoting@4paradigm.com
 * @Date: 2023-07-18 15:34:34
 * @LastEditors: 王晓婷 wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-24 17:53:05
 * @Description: test 工具函数
 */
function toArgs(array) {
  return function () {
    return arguments;
  }.apply(undefined, array);
}

var arrayProto = Array.prototype,
  root = (typeof global === "object" && global) || this;

var slice = arrayProto.slice;

var args = toArgs([1, 2, 3]),
  realm = {};

var falsey = [, null, undefined, false, 0, NaN, ""];

var stubFalse = function () {
    return false;
  },
  stubTrue = function () {
    return true;
  };

var Symbol = root.Symbol;

var symbol = Symbol ? Symbol("a") : undefined;

export { toArgs, args, falsey, stubFalse, stubTrue, slice, symbol, realm };
