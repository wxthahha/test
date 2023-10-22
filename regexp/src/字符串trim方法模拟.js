/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 15:42:01
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 15:52:47
 */
export function fakeTrim(str) {
  return str.replace(/^[ ]*(.*?)[ ]*$/g, "$1");
}

export function fakeTrim1(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
