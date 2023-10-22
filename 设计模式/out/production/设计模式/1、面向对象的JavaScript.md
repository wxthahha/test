### 面向对象的JavaScript

#### 动态类型语言
#### 多态性
> 实际上指的是对象的多态性。
```js
const makeSound = function(animal){
  animal.sound();
}
function Dock () {};
Dock.prototype.sound = function () {
  console.log("嘎嘎嘎");
};
function Chicken () {};
Chicken.prototype.sound = function () {
  console.log("咯咯咯");
}
function Dog () {};
Dog.prototype.sound = function () {
  console.log("汪汪汪");
}

makeSound(new Dock());
makeSound(new Chicken());
makeSound(new Dog());
```
#### 使用继承实现多态效果
继承分为 **实现继承** 和 **接口继承**。  
