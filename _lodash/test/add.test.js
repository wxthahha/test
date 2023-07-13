import assert from "assert";

import add from "../add";

describe("add", function () {
  it("should add two numbers", function () {
    assert.strictEqual(add(6, 4), 10);
    assert.strictEqual(add(-6, 4), -2);
    assert.strictEqual(add(-6, -4), -10);
  });

  it("should not coerce arguments to numbers", function () {
    assert.strictEqual(add("6", "4"), "64");
    assert.strictEqual(add("x", "y"), "xy");
    assert.strictEqual(add("0", -0), "0-0");
    assert.strictEqual(
      add("aaa", [0, -0, "1", Symbol("0"), {}, null, undefined]),
      'aaa0,-0,1,Symbol(0),[object Object],null,undefined'
    );
  });
});
