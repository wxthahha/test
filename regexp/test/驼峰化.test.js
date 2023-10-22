/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 16:13:11
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 16:56:35
 */
import assert from "assert";
import { camelize } from "../src/驼峰化";

describe("驼峰化", function () {
  it("驼峰化", function () {
    assert.strictEqual(camelize("-moz-aaa"), "MozAaa")
    assert.strictEqual(camelize("moz-aaa"), "mozAaa")
  });
});
