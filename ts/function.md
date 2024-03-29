函数部分，主要关注参数类型、返回类型以及重载的应用。

# 函数

## 函数的类型签名

### 入参和返回值都是用 : 标记。

- 函数声明(Function Declaration)：function foo() {}
- 函数表达式(Function Expression): let foo = function () {}

```
  //* 方式1
  const foo = (name: string): number => {
    return name.length;
  }
  //* 方式2
  const bar: (name: string) => number = (name) => {
    return name.length;
  }
```

- 对于方式 2，可读性极差。

### 对于函数声明，要么直接在函数中进行进行参数和返回值的类型声明，要么使用类型别名将函数类型签名抽离出来。

```
  type BarType = (name: string) => number;
  const bar: BarType = (name) => {
    return name.length;
  }
```

如果仅仅是为了描述函数的类型结构，也可以用 interface 来进行函数声明。

### 此时的 interface 被称为 Callable Interface。

```
  interface BarFuncStructure {
    (name: string): number
  }
```

### interface 本质上就是用来描述一种类型结构的，而函数类型本质上也是一种结构固定的类型而已。

## void 类型

- 当一个函数没有返回值时，应该显式声明为 void，更好的说明当前函数没有进行返回操作。

## 可选参数 与 rest 参数

- 可选参数：问号?
- 需要注意的是，**可选参数一定放在必选参数之后**。

- rest 的标注使用数组或者元组。

```
  function foo(name: string, ...rest: any[]): void { }
  function foo1(name: string, ...rest: [number, boolean]): void {}
```

## 重载

- 在某些复杂的情况下，返回值类型与某些入参相关联，仅通过返回值的联合类型无法准确推断内部返回类型。
- - 此时，要想实现与入参关联的返回值类型时，可以使用 ts 实现的 **函数重载签名（Overload Signature）**
- - 拥有多个重载签名的函数在被调用的时候，是按照重载的声明顺序向下查找的。

- ts 的重载只是函数类型声明的重载，而非具体实现上的重载，更像是伪重载。而其他语言的函数重载实现了多个入参不同的同名函数才是真正意义上的重载。

## 异步函数、Generator 函数等的类型签名

对于异步函数，即标记为 async 的函数，返回值一定是 Promise 类型的。而 Promise 类型内部包含的类型则通过**泛型**的形式书写的，即 **Promise<T>**
