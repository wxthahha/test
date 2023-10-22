/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 15:55:38
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 15:58:14
 */
import assert from "assert";
import { upperHeadLetter } from "../src/将每个单词的首字母转换为大写";

describe("将每个单词的首字母转换为大写", function () {
  it("将每个单词的首字母转换为大写", function () {
    assert.strictEqual(upperHeadLetter("i love you"), "I Love You");
  });
});
