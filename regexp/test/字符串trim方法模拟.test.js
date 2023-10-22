/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 15:42:09
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 15:53:23
 */
import assert from "assert";
import { fakeTrim, fakeTrim1 } from "../src/字符串trim方法模拟";

describe("字符串trim方法模拟", function () {
  it("字符串trim方法模拟", function () {
    assert.strictEqual(fakeTrim("  aa  "), "aa");
    assert.strictEqual(fakeTrim1("  aa  bb "), "aa  bb");
  });
});
