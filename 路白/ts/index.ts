/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-03-19 17:35:38
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-03-20 09:31:49
 * @Description: ts基础
 */

enum Actiontype {
  /** 跑 */
  RUN = "run",
  /** 吃 */
  EAT = "eat",
}

const a = Actiontype.RUN;

type Action = "run" | "eat";
const b: Action = "run";

interface BaiduResponse {
  name: string;
  height: number;
}
const c: BaiduResponse = {
  name: "",
  height: 0,
};

interface C {
  name: string;
}

interface D {
  name: number;
  age: number;
}

interface E {
  height: number;
}

function e(a: C | D | E) {}

e({ name: "true", age: 1, height: 2 });

function toArray(x: number): Array<number> {
  return [x];
}

type Func = typeof toArray;

interface F {
  name: string;
  age: number;
}

type k1 = keyof F;
const _inK1: k1 = 'name'; 