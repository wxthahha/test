/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 16:58:56
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 17:03:09
 */
import assert from "assert";
import { dashed } from "../src/中划线化";

describe("中划线化", function () {
  it("中划线化", function () {
    assert.strictEqual(dashed("MozAaa"), "-moz-aaa");
    assert.strictEqual(dashed("MozTransform"), "-moz-transform")
  });
});
