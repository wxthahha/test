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
