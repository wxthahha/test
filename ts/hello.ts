/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-03-11 16:53:39
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-04-20 14:17:47
 * @Description: ts
 */
// import { expectType } from 'tsd';

// console.log("hello ts1");
// const a: number = 2;

// expectType<string>('aaa');
// expectType<string>(455);

void (function a() {
  console.log("hello world");
})();
// 类似于
void (function a() {
  console.log("hello world 1");
})();

// 数组的类型表示
const arr: string[] = ["a", "1"];
// console.log(arr[100]);

// 元组
const arr2: [string, number?, boolean?, string?] = ["a", , , "b"];
// console.log(arr2[3]);

// TypeScript 4.0 具名元组
const arr3: [name: string, age?: number] = ["liutao", 12];
type a = typeof arr3;
console.log("typeof", typeof arr3);

// interface 接口类型
interface IDescription {
  readonly name: string; //* readonly 防止对象的属性被再次赋值
  age: number;
  male?: boolean;
  fn?: Function;
}

const obj2: IDescription = {
  name: "aa",
  age: 12,
  male: true,
};
obj2.male = false;
//! error: 不能调用可能是未定义的方法
// obj2.fn();
// 但是可赋值
// obj2.fn = () => {
//   console.log('fn');
// };
//! error: 无法为"name"赋值，因为它是只读属性
// obj2.name = ''

// 只读数组
const arr4: readonly string[] = ["1", "2ƒ"];
// 只读元组
const arr5: readonly [string] = ["3"];
// arr5[0] = '4' //! error: 无法为 0 赋值，因为它是只读属性
// arr5.push('1') //! error: readonly [string]上不存在属性push

function A(): void {
  console.log("aaaaa");
}

type t1 = typeof A | { a: string };
const t: t1 = { a: "1" };
const t2: t1 = A;
if (typeof t === typeof A) {
  console.log("bbbbbb");
}
if (typeof t2 === typeof A) {
  t2();
}

// object Object {}空对象
// let _null: Object = null;
// let _undefined: Object = undefined;
// let _void0: Object = void 0;
let _string: Object = "aa";
let _number: Object = 1;
let _symbol: Object = Symbol("a");
let _boolean: Object = true;
let _arr: Object = [];
let _obj: Object = { a: 1 };
let _func: Object = () => {};

// let _null1: object = null; //! strictNullChecks开启
let _obj1: object = _obj;
let _func1: object = _func;
let _arr1: object = _arr;
// let _string1: object = '1'; //! 不能将类型string分配给类型object

declare let aaa: a;