/*
要求：定义狗和猫两种类型，分别创建柴犬、边牧、布偶、英短四个对象；狗发出“汪汪！”，猫发出“喵喵！”；
通过统一的 makeSound() 函数输出动物名称和叫声。

预期输出： 
柴犬:汪汪!
边牧:汪汪!
布偶:喵喵!
英短:喵喵!
*/
// javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return "汪汪";
  }
}
class Cat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return "喵喵";
  }
}
const dog1 = new Dog("柴犬");
const dog2 = new Dog("边牧");
const cat1 = new Cat("布偶");
const cat2 = new Cat("英短");
function makeSound(animal) {
  console.log(`${animal.name}:${animal.speak()}!`);
}
makeSound(dog1); // 柴犬:汪汪!
makeSound(dog2); // 边牧:汪汪!
makeSound(cat1); // 布偶:喵喵!
makeSound(cat2); // 英短:喵喵!
