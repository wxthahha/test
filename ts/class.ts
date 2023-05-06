class Foo {
  constructor(public a: string, private b: number, protected c: boolean) {}
}

class FooChild extends Foo {
  aaa: string = super.a;
}

const _classInst = new Foo("aaa", 111, true);

console.log(_classInst.a);
