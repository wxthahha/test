import assert from "assert";

const metaCharacters = ".^$(){}[]?\\/|=:!*+?-"
describe("元字符", function(){
  it("需要转义的字符", function (){
    assert.strictEqual(/\.\^\$\(\)\{\}\[\]\?\\\/\|\=\:\!\*\+\?\-/.test(metaCharacters), true);
  })
  it("需要转义的字符 === 字符", function (){
    assert.strictEqual("\.\^\$\(\)\{\}\[\]\?\\\/\|\=\:\!\*\+\?\-" === metaCharacters, true);
  })
  it("字符组中的元字符[]^-", function (){
    assert.strictEqual(/[\^\-abc]/.test("^"), true);
    assert.strictEqual(/[\^\-abc]/.test("-"), true);
    assert.strictEqual(/[\^\-abc]/.test("a"), true);
    assert.strictEqual(/^[\^\-\[abc\]]*$/.test("^-a[]"), true);
  })
  it("字符组中的量词", function (){
    assert.strictEqual(/\{m,n}/.test("{m,n}"), true);
  })
})
