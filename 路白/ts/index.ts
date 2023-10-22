/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-03-19 17:35:38
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-08 23:00:02
 * @Description: ts基础
 */

// enum ActionType {
//   /** 跑 */
//   RUN = "run",
//   /** 吃 */
//   EAT = "eat",
// }

// const a = ActionType.RUN;

// type Action = "run" | "eat";
// const b: Action = "run";

// interface BaiduResponse {
//   name: string;
//   height: number;
// }
// const c: BaiduResponse = {
//   name: "",
//   height: 0,
// };

// interface C {
//   name: string;
// }

// interface D {
//   name: number;
//   age: number;
// }

// interface E {
//   height: number;
// }

// function e(a: C | D | E) {}

// e({ name: "true", age: 1, height: 2 });

// function toArray(x: number): Array<number> {
//   return [x];
// }

// type Func = typeof toArray;

// const func1 = (): Func => {
//   return (b: number) => {
//     return [b];
//   };
// };

// interface aaaa {
//   b: Func;
// }

// const aaaa1: aaaa = {
//   b: (a: number) => {
//     return [a];
//   },
// };

// interface F {
//   name: string;
//   age: number;
// }

// type k1 = keyof F;
// const _inK1: k1 = "name";

// interface IRouteParams {
//   orderId: string;
//   businessCoreId: string;
// }

// type routeType = keyof IRouteParams;

// let aaaaaa: {
//   key: routeType;
//   value?: string;
// }[] = [
//   {
//     key: "orderId",
//     value: "1",
//   },
//   {
//     key: "businessCoreId",
//   },
// ];

// enum a {
//   "b" = "a",
//   "c" = "b",
// }

// for (let key in a) {
//   console.log(key);
// }

// type aaaa = {
//   [key in routeType]: string;
// };

// const ai: aaaa = {
//   orderId: "",
//   businessCoreId: "",
// };

// type a = "a" | "b" | "c";
// // type a = { a: number } & { b: string } & { c: boolean };

// type aa = {
//   [key in a]: string;
// };

// const aaa: aa = {};

// enum a {
//   "a" = "A",
// }
// type aa = keyof a;
// type b = "a" | "b";
// interface c {
//   a: string;
// }

// type bb = {
//   [key in a]: string;
// };

// type aa = "eat" | "run";

// interface A<T extends aa> {
//   a: T;
// }

// const a: A<aa> = {
//   a: "run",
// };

// interface ILengthwise {
//   length?: number;
// }

// function a<T extends ILengthwise>(args: T): T {
//   return args;
// }

// a({});

// interface a {
//   a: string;
//   b: number;
//   c?: boolean;
// }

// type b = Partial<a>;

// const bb: a = {
//   a: "",
//   b: 2
// }

// type c = Required<a>;

// type setUser = (a: number) => number;

// interface setUser1 {
//   (a: number): number;
// }

// const aa: setUser1 = (a: number) => a;

// aa(1);

// type B = "a";

// type C = "c";

// type A = C extends B ? "yes" : "no";

// interface A {
//   name?: string;
// }

// interface AA {
//   height: number;
// }

// interface B extends A, AA {
//   age: number;
// }

// const a: B = {
//   age: 1,
//   height: 168,
// };
