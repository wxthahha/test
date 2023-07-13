/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-07-13 17:33:14
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-13 17:34:16
 */
const isSymbol = (value) => {
  return (
    typeof value === "symbol" ||
    (typeof value === "object" &&
      value !== null &&
      getTag(value) === "[object Symbol]")
  );
};

export default isSymbol;
