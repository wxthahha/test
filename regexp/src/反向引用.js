/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 23:09:09
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 23:14:09
 */
export function reverseQuote(str) {
  return /\d{4}(-|\/|\.)\d{2}\1\d{2}/.test(str);
}
