import assert from "assert";

import add from "../add";

describe("add", function () {
  it("should add two numbers", function () {
    assert.strictEqual(add(6, 4), 10);
    assert.strictEqual(add(-6, 4), -2);
    assert.strictEqual(add(-6, -4), -10);
    assert.strictEqual(add(), 0);
    assert.strictEqual(add(1), 1);
    assert.strictEqual(add(undefined, 1), 1);
    assert.strictEqual(add(Symbol(0), 1), NaN);
    assert.strictEqual(add(null, 1), 1);
    assert.strictEqual(add(true, 1), 2);
    assert.strictEqual(add(false, 1), 1);
  });

  it("should not coerce arguments to numbers", function () {
    assert.strictEqual(add("6", "4"), "64");
    assert.strictEqual(add("x", "y"), "xy");
    assert.strictEqual(add("0", -0), "0-0");
    assert.strictEqual(
      add("aaa", [0, -0, "1", Symbol("0"), {}, null, undefined, true, false, [], function(){}]),
      "aaa0,-0,1,Symbol(0),[object Object],null,undefined,true,false,,function(){}"
    );
  });
});
