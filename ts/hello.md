<!--
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-04-18 21:04:35
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-04-21 13:24:14
-->
## Object
所有的原始类型&引用类型都可以用 Object 代表。
装箱类型（Boxed Types）：例如Symbol、Number、String、Boolean。
### 在关闭 strictNullChecks 下，装箱类型（Boxed Types）包含null、undefined、void 0以及对应的拆箱类型（Unboxed Types）.
例如：String 可以代表 null、undefined、void 0、string

## object
为了解决Object的类型问题，它只代表非原始数据类型，即数组、对象、函数类型这些。
在关闭 strictNullChecks 下，也可以代表null、undefined、void 0。

# {}
代表非null和undefined，相当于恶劣的any。
在关闭 strictNullChecks 下，也可以代表null、undefined、void 0。