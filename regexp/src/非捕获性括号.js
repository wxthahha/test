/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 14:27:18
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 14:40:17
 */
export function captureBracketsGroup(str) {
  return str.match(/(ab)+/g);
}

export function nonCaptureBracketsGroup(str) {
  return str.match(/(?:ab)+/g);
}

export function captureBracketsBranch(str) {
  return /^I love (JavaScript|Regular Expression)$/.test(str);
}

export function nonCaptureBracketsBranch(str) {
  return /^I love (?:JavaScript|Regular Expression)$/.test(str);
}
