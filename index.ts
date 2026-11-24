/*
要求：定义狗和猫两种类型，分别创建柴犬、边牧、布偶、英短四个对象；狗发出“汪汪！”，猫发出“喵喵！”；
通过统一的 makeSound() 函数输出动物名称和叫声。

预期输出： 
柴犬:汪汪!
边牧:汪汪!
布偶:喵喵!
英短:喵喵!
*/
interface Animal {
  name: string;
  speak(): string;
}
class Dog implements Animal {
  constructor(public name: string) {}
  speak(): string {
    return "汪汪";
  }
}
class Cat implements Animal {
  constructor(public name: string) {}
  speak(): string {
    return "喵喵";
  }
}
const dog1 = new Dog("柴犬");
const dog2 = new Dog("边牧");
const cat1 = new Cat("布偶");
const cat2 = new Cat("英短");
function makeSound(animal: Animal): void {
  console.log(`${animal.name}:${animal.speak()}!`);
}
makeSound(dog1);
makeSound(dog2);
makeSound(cat1);
makeSound(cat2);
