/*
 * @Author: 王晓婷 wangxiaoting@4paradigm.com
 * @Date: 2023-07-18 15:34:34
 * @LastEditors: 王晓婷 wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-19 14:41:40
 * @Description: test 工具函数
 */
function toArgs(array) {
  return function () {
    return arguments;
  }.apply(undefined, array);
}

var args = toArgs([1, 2, 3]);

var falsey = [, null, undefined, false, 0, NaN, ''];

export { toArgs, args, falsey };
