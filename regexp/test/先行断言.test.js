/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 19:12:46
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 19:24:49
 */
import assert from "assert";
import {
  negativeLookahead,
  negativeLookbehind,
  positiveLookahead,
  positiveLookbehind,
} from "../src/先行断言";

describe("?=p ?!p ?<=p ?<!p", function () {
  it("?=p", function () {
    assert.strictEqual(positiveLookahead("hello"), "he#l#lo");
  });
  it("?!p", function () {
    assert.strictEqual(negativeLookahead("hello"), "#h#ell#o#");
  });
  it("?<=p", function () {
    assert.strictEqual(positiveLookbehind("hello"), "hel#l#o");
  });
  it("?<=p", function () {
    assert.strictEqual(negativeLookbehind("hello"), "#h#e#llo#");
  });
});
