import assert from "assert";
import { formatThousands } from "../src/index";

describe("regexp", function () {
  it("千分位分隔整数", function () {
    assert.strictEqual(formatThousands(123), "123");
    assert.strictEqual(formatThousands(12345), "12,345");
    assert.strictEqual(formatThousands(12), "12");
  });
  // it("千分位分隔小数", function () {
  //   assert.strictEqual(formatThousands(123.12), "123.12");
  //   assert.strictEqual(formatThousands(1234.124), "1,234.123");
  //   assert.strictEqual(formatThousands(1234.1234), "1,234.123,4");
  // });
});
