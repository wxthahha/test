/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 19:12:34
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 19:24:25
 */
export function positiveLookahead(string) {
  // 正向先行断言
  return string.replace(/(?=l)/g, "#");
}

export function negativeLookahead(string) {
  // 负向先行断言
  return string.replace(/(?!l)/g, "#");
}

export function positiveLookbehind(string) {
  return string.replace(/(?<=l)/g, "#");
}

export function negativeLookbehind(string) {
  return string.replace(/(?<!l)/g, "#");
}
