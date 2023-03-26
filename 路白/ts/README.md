<!--
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-03-20 09:01:18
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-03-20 09:33:22
 * @Description:
-->

## 基础知识

基本数据类型：number string object boolean undefined null void

1. enum 枚举
2. type interface
3. 联合类型 |（是多种类型的集合，可以使用任意至少一种类型组合，但不能超出所有类型）
4. 交叉类型 &（是多种类型的并集，必须包含所含所有类型，同样不能超出类型集合）
5. typeof
   可以用来获取一个变量声明或者对象的类型

```ts
function toArray(x: number): Array<number> {
  return [x];
}
type Func = typeof toArray;
```
6. keyof
   用来获取一个对象中所有的key。
7. in
   遍历可枚举类型。