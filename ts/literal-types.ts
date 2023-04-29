// 字面量类型
// 是比原始类型更精确的类型，是原始类型的子类型。
// 包含四种字面量类型：数字、字符串、布尔值、对象。
// 是值级别的字面量一致。
// 通常和联合类型 ｜ 一起使用，表示一组字面量。
const str: "111" = "111";
const num: 100 = 100;
const right: true = true;
const obj: {
  a: 1;
  b: 2;
} = {
  a: 1,
  b: 2,
};

type a = {
  code: 0 | 30000;
  message: "success" | "fail" | string;
  data: any;
};

//* 联合类型 - 一组类型的可用集合
// 有几点需要注意
//  1、联合类型中的函数需要用 () 括起来。
//  2、函数类型不存在字面量类型，因此 (() => {}) 是一个合法的类型
//  3、可以在联合类型中嵌套，但最终都会展平到第一级中。

type types = (() => {}) | 1 | "1";
let t1: types = () => {
  console.log("a");
  return {};
};

//TODO 联合类型最常见的使用场景之一：就是利用多个对象类型的联合手动实现互斥的属性。
//* 这一属性用于类型守卫以及类型控制流分析。
// 例如这一属性如果有属性1，就没有属性2。如下：
interface TMP {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}

declare let tmp: TMP;
tmp = {
  user: {
    vip: true,
    expires: "aaaa",
  },
};

if (tmp.user.vip) {
  console.log(tmp.user.expires);
}

//TODO 可以用类型别名来复用一组字面量联合类型。
type CODE = 0 | 30000 | 30001;
