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