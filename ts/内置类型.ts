//* any类型可以接受任何类型的值
//* unknown类型可以接受任何类型的值

let a: any = 1;
// let a: unknown = 1;
// console.log(typeof a); // number
a = "1";
// console.log(typeof a); // string
a = true;
// console.log(typeof a); // boolean
a = Symbol(1);
// console.log(typeof a); // symbol
a = function () {};
// console.log(typeof a); // function
a = [];
// console.log(typeof a); // object
a = {};
// console.log(typeof a); // object
a = null;
// console.log(typeof a); // object
a = undefined;
// console.log(typeof a); // undefined

//* 任何类型都可以接受any类型的值
let b: number = 1;
b = a;

//* unknown类型的值只能赋值给unknown和any类型
let c: unknown = 1;
// let d: any = c; // ok
// let d: unknown = c; // ok
// let d: number = c; //! error

//* 类型断言 as
//* 类型断言的正确使用方式是：在ts类型分析不正确或不符合预期时，将其断言为此处的正确类型
interface IFoo {
  name: string;
}
declare const obj1: {
  _foo: IFoo;
};
const { _foo } = obj1;

//* 双重断言
const str22: string = "1111";
// (str22 as { handler: () => {} }).handler();
(str22 as any as { handler: () => {} }).handler();
(<{ handler: () => {} }>(<any>str)).handler();

//* 非空断言
