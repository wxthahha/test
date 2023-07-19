/*
 * @Author: 王晓婷 wangxiaoting@4paradigm.com
 * @Date: 2023-07-18 14:34:58
 * @LastEditors: 王晓婷 wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-07-18 18:46:14
 * @Description: isObjectLike 测试用例
 */
import assert from "assert";
import _ from "lodash";
import isObjectLike from "../isObjectLike.js";
import { args } from "./util.js";

describe("isObjectLike", function () {
  it("should return `true` for objects", function () {
    assert.strictEqual(isObjectLike(args), true);
    assert.strictEqual(isObjectLike([1, 2, 3]), true);
    assert.strictEqual(isObjectLike(Object(false)), true);
    assert.strictEqual(isObjectLike(Object(1)), true);
    assert.strictEqual(isObjectLike(Object("a")), true);
    assert.strictEqual(isObjectLike(new Date()), true);
    assert.strictEqual(isObjectLike(new Error()), true);
    assert.strictEqual(isObjectLike(/x/), true);
  });

  it("should return `false` for non-objects", function () {
    assert.strictEqual(isObjectLike(1), false);
    assert.strictEqual(isObjectLike("a"), false);
    assert.strictEqual(isObjectLike(null), false);
    assert.strictEqual(isObjectLike(undefined), false);
    assert.strictEqual(isObjectLike(true), false);
    assert.strictEqual(isObjectLike(Symbol("1")), false);
    assert.strictEqual(isObjectLike(BigInt(1)), false);
    assert.strictEqual(
      isObjectLike(function () {}),
      false
    );
  });
});
