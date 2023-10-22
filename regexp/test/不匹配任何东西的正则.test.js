/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 19:28:04
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 19:31:20
 */
import assert from "assert";
import { isFalse, isFalse1 } from "../src/不匹配任何东西的正则";

describe("不匹配任何东西的正则", function () {
  it(".^", function () {
    assert.strictEqual(isFalse("aaa"), false);
    assert.strictEqual(isFalse(""), false);
  });
  it("$.", function () {
    assert.strictEqual(isFalse("aaa"), false);
    assert.strictEqual(isFalse(""), false);
  });
});
