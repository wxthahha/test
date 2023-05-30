# Class

> Class 的主要结构包含 构造函数、属性、方法和访问符（Accessor）。

#### 类与类成员的类型签名

public、private、protected

#### 只读成员 readonly

#### 静态成员 static

#### 抽象类 abstract

抽象类无法声明静态的抽象成员。

#### 实现类 implements

#### interface 也可以描述类

### 私有构造函数

```
class Foo3 {
  private constructor() {}
}

// const _foo3 = new Foo3(); //! 类“Foo3”的构造函数是私有的，仅可在类声明中访问
```

是为了防止类被实例化。