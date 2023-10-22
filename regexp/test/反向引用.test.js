/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 23:09:16
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 23:19:34
 */
import assert from "assert";
import { reverseQuote } from "../src/反向引用";

describe("反向引用", function () {
  it("反向引用", function () {
    assert.strictEqual(reverseQuote("2022-12-22"), true);
    assert.strictEqual(reverseQuote("2022/12/22"), true);
    assert.strictEqual(reverseQuote("2022.12.22"), true);
    assert.strictEqual(reverseQuote("2022-12/22"), false);
    assert.strictEqual(reverseQuote("2022/12-22"), false);
    assert.strictEqual(reverseQuote("2022.12-22"), false);
    assert.strictEqual(reverseQuote("2022/12.22"), false);
  });
});
