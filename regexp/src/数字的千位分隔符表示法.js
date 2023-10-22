/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 19:32:12
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 19:48:07
 */
export function intThou(str) {
  return str.replace(/\B(?=(\d{3})+\b)/g, ",");
}

export function formatIntMoney(num) {
  return num
    .toFixed(2)
    .replace(/\B(?=(\d{3})+\b)/g, ",")
    .replace(/^/, "$$ ");
}
