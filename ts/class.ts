/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-04-25 23:13:12
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-05-22 13:27:45
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
console.log(_classChildInst.a);
console.log(_classChildInst.aaa);
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

console.log(Foo1.A);
