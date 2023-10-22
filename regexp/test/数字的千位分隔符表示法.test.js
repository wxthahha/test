/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 19:32:19
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 19:47:52
 */
import assert from "assert";
import { intThou, formatIntMoney } from "../src/数字的千位分隔符表示法";

describe("数字的千位分隔符表示法", function () {
  it("整数的千位分隔符表示法", function () {
    assert.strictEqual(intThou("2"), "2");
    assert.strictEqual(intThou("22"), "22");
    assert.strictEqual(intThou("222"), "222");
    assert.strictEqual(intThou("2222"), "2,222");
    assert.strictEqual(intThou("22222"), "22,222");
    assert.strictEqual(intThou("222222"), "222,222");
  });

  it("12345678 123456789 支持其他形式", function () {
    assert.strictEqual(intThou("12345678 123456789"), "12,345,678 123,456,789");
  });

  it("货币格式化 1888 => $ 1,888.00", function () {
    assert.strictEqual(formatIntMoney(1888), "$ 1,888.00");
  });
});
