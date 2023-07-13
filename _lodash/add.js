/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-07-13 16:04:35
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-13 22:47:33
 * @FilePath: /test/_lodash/add.js
 * @Description: 加法计算
 */
import createMathOperator from "./.internal/createMathOperator";

const add = createMathOperator((augend, addend) => augend + addend, 0);

export default add;
