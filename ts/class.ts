/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-04-25 23:13:12
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-05-30 13:19:10
 */
class Foo {
  constructor(public a: string, private b: number, protected c: boolean) {
    console.log("foo constructor");
  }
  printWithLove() {
    console.log("printWithLove foo");
  }
}

class FooChild extends Foo {
  aaa: string = super.a;
  override printWithLove() {
    console.log("printWithLove foo child");
  }
}

// const _classInst = new Foo("aaa", 111, true);
const _classChildInst = new FooChild("bbb", 222, false);

// console.log(_classInst.a);
// console.log(_classChildInst.a);
// console.log(_classChildInst.aaa);
_classChildInst.printWithLove();

// 抽象类
abstract class AbsFoo {
  abstract absProps: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string;
}

// 实现类
class Foo1 implements AbsFoo {
  absProps: string = "aaa";
  get absGetter() {
    return "bbb";
  }
  absMethod(name: string): string {
    return this.absProps + name;
  }
  static A: number = 111;
}

// console.log(Foo1.A);

// interface 描述类
interface IAbsFoo {
  absProps: string;
  get absGetter(): string;
  absMethod(name: string): string;
}

class Foo2 implements IAbsFoo {
  absProps: string = "i-aaa";
  get absGetter() {
    return "i-bbb";
  }
  absMethod(name: string): string {
    return this.absProps + name;
  }
  static B: number = 222;
}

// console.log(Foo2.B);

const _foo2 = new Foo2();
// console.log(_foo2.absProps);
// console.log(_foo2.absGetter);
// console.log(_foo2.absMethod("_foo2"));

class Foo3 {
  private constructor() {}
}

// const _foo3 = new Foo3(); //! 类“Foo3”的构造函数是私有的，仅可在类声明中访问