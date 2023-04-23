enum e1 {
  Foo,
  Bar,
  Baz,
}
console.log(e1.Foo, e1.Bar, e1.Baz);

enum e2 {
  Foo,
  Bar = 599,
  Baz,
}
console.log(e2.Foo, e2.Bar, e2.Baz);

const renderNumber = () => 499;

//* 延迟枚举
enum e3 {
  Foo = renderNumber(),
  Bar = 599,
  Baz,
}
console.log(e3.Foo, e3.Bar, e3.Baz);

//* 枚举的双向映射
enum e4 {
  Foo = 2,
  Bar = "bar",
  Baz = "baz",
}
console.log(e4.Foo, e4[0]);

//* 常量枚举
const enum e5 {
  Foo,
}
e5.Foo;
// e5[0] // error:只有字符串文本才能访问常数枚举成员

//* 类型控制流分析中的字面量类型
const c1 = "a";
const c2 = 1;
const c3 = true;
const c4 = null;
const c5 = undefined;
const c6 = [];
const c7 = {
  a: "1",
  b: 1,
  c: true,
};
const c8 = (a: number) => {
  return a + 1;
};
