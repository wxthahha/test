/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-21 19:01:45
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-21 19:08:26
 */
import assert from "assert";
import { replace_b, replace_B } from "../src/单词边界";

const str = "[JS] Lesson_01.mp4";

describe("单词边界", function () {
  it("单词边界b", function () {
    assert.strictEqual(replace_b(str), "[#JS#] #Lesson_01#.#mp4#");
  });

  it("非单词边界B", function () {
    assert.strictEqual(replace_B(str), "#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4");
  });
});
