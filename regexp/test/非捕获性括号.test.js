/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-22 14:27:25
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-22 14:42:49
 * @FilePath: /test/regexp/test/非捕获性括号.test.js
 */
import assert from "assert";
import {
  captureBracketsBranch,
  captureBracketsGroup,
  nonCaptureBracketsBranch,
  nonCaptureBracketsGroup,
} from "../src/非捕获性括号";

describe("非捕获性括号", function () {
  it("捕获性括号分组", function () {
    assert.deepStrictEqual(captureBracketsGroup("ababa abbb ababab"), [
      "abab",
      "ab",
      "ababab",
    ]);
  });
  it("非捕获性括号分组", function () {
    assert.deepStrictEqual(nonCaptureBracketsGroup("ababa abbb ababab"), [
      "abab",
      "ab",
      "ababab",
    ]);
  });
  it("捕获性括号分支", function () {
    assert.deepStrictEqual(captureBracketsBranch("I love JavaScript"), true);
    assert.deepStrictEqual(
      captureBracketsBranch("I love Regular Expression"),
      true
    );
    assert.deepStrictEqual(captureBracketsBranch("I love aaa"), false);
  });
  it("非捕获性括号分支", function () {
    assert.deepStrictEqual(nonCaptureBracketsBranch("I love JavaScript"), true);
    assert.deepStrictEqual(
      nonCaptureBracketsBranch("I love Regular Expression"),
      true
    );
    assert.deepStrictEqual(nonCaptureBracketsBranch("I love aaa"), false);
  });
});
