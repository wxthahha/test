/*
 * @Author: 王晓婷 wangxiaoting@4paradigm.com
 * @Date: 2023-07-18 14:34:58
 * @LastEditors: 王晓婷 wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-18 14:45:11
 * @Description: isObjectLike 测试用例
 */
import assert from "assert";
import lodashStable from "lodash";
import isObjectLike from "../isObjectLike";

describe("isObjectLike", function () {
  assert.strictEqual(isObjectLike({}), true);
});
