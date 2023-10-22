/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 16:58:51
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 17:01:58
 */
export function dashed(str) {
  return str.replace(/([A-Z])/g, function (match, c) {
    return c ? `-${c.toLowerCase()}` : "";
  });
}
