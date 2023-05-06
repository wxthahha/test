class Foo {
  constructor(public a: string, private b: number, protected c: boolean) {}
}

class FooChild extends Foo {}

const _classInst = new Foo("aaa", 111, true);

console.log(_classInst.a);
