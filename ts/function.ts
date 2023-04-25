/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-04-24 13:18:07
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-04-25 21:04:49
 * @Description: ts函数和class
 */
function foo(name: string): number {
  return name.length;
}

const bar = (name: string): number => {
  return name.length;
};

type BazType = (name: string) => number;

const baz: BazType = (name) => {
  return name.length;
};

// callable interface
interface BazFuncStructure {
  (name: string): number;
}
const baz1: BazFuncStructure = (name) => {
  return name.length;
};

//* 可选参数
function foo1(name: string, age?: number): number {
  const _age = age || 18;
  return name.length + _age;
}
// 或如下使用方式
function foo2(name: string, age: number = 18): number {
  return name.length + age;
}
