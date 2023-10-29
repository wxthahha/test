// 1. 每个字符为 "a、"b"、"c" 任选其一，
// 2. 字符串的长度是 3 的倍数。

const regexp = /^([abc]{3})+$/;
console.log(regexp.test("acdc"));
console.log(regexp.test("aaa"));
console.log(regexp.test("aaabac"));
