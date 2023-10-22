/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 15:55:44
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 16:12:18
 */
export function upperHeadLetter(str) {
  return str.replace(/\b\w/g, function(c){
    return c.toUpperCase();
  })
  // return str.replace(/(?:^|\s)\w/g, function (c) {
  //   return c.toUpperCase();
  // });
}
