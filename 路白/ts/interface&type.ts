/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-10-08 23:00:20
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-10-08 23:06:34
 */
type A = "a" | "c";
type B = "b" | "d";
type C = [A, B];

const c1: C = ["c", "b"];

type stringA = string;
type D = A extends B ? boolean : number;
type E<T extends D> = {
  a: T;
  b?: number;
};

const e1: E<1> = {
  a: 1,
};

interface F {
  a: number;
  b: stringA;
  c: D;
}
type G = Pick<F, "c">;
type H = Omit<F, "c">;

const g1: G = { c: 1 };
const h1: H = {
  a: 1,
  b: "",
};
