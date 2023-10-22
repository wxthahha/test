/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 19:50:30
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 20:23:25
 */
import assert from "assert";
import { verifyPassword } from "../src/验证密码问题";

describe("验证密码问题", function () {
  it("密码长度 6-12 位，由数字、小写字符和大写字母组成，但必须至少包括 2 种字符", function () {
    assert.strictEqual(verifyPassword("aaaaaaa"), false);
    assert.strictEqual(verifyPassword("04444444"), false);
    assert.strictEqual(verifyPassword("AASSSDWWW"), false);
    assert.strictEqual(verifyPassword("aqq0455"), true);
    assert.strictEqual(verifyPassword("AAAA034343"), true);
    assert.strictEqual(verifyPassword("ADFRFdsdsda"), true);
    assert.strictEqual(verifyPassword("Aa0sds22A"), true);
  });
});
