import assert from "assert";
import {doubleTag} from "../src/匹配成对标签";

describe("匹配成对标签", function(){
  it("匹配成对标签", function(){
    assert.strictEqual(doubleTag("<></>"), true);
    assert.strictEqual(doubleTag("<a></a>"), true);
    assert.strictEqual(doubleTag("<b>aaa</b>"), true);
  })
})