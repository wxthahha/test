<!--
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-04-23 13:48:58
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-04-23 21:26:05
 * @Description: ts枚举类型 enum
-->

## 枚举 enum

更像 js 中声明的 constants 文件下的变量们。
优点：
1、得到更好的类型提示；
2、常量被真正约束到一个命名空间下。
如果没有声明枚举的值，会默认从 0 开始，以 1 递增。

### 数字型枚举中可以使用延迟枚举。

如果在数字枚举中使用了延迟枚举，没有使用延迟枚举的成员必须放到使用常量枚举声明的成员之后或者第一位。

### ts 中也可以同时使用 字符串 或者 数字 作为枚举值。

## 枚举和对象的最重要的一点差距是：对象是单向映射（只能从键映射到键值），而 数字型枚举是双向映射（可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员）。

`ts
  var Items;
  (
    function(Items) {
      Items[Items["Foo"] = 0] = "Foo";
      Items[Items["Bar"] = 1] = "Bar";
      Items[Items["Baz"] = 2] = "Baz";
    }
  )(Items || (Items = {}))
`

## 常量枚举，声明多了关键字 const

差异性主要体现在访问性和编译产物上。
1、访问性：即使是数字型枚举也只能单向映射
2、编译产物：不会产生辅助对象 Items，对枚举成员的访问会被直接内联替换为枚举的值。
` const enum e6 {
    Foo
  }
  const fooVal = e6.Foo;
  // 等于
  //  const fooVal = 0;
`

### 类型控制流分析中的字面量类型
ts 也会在某些情况下将变量类型推导为字面量类型。