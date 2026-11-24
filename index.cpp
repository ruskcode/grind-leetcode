/* 要求：定义狗和猫两种类型，分别创建柴犬、边牧、布偶、英短四个对象；狗发出“汪汪！”，猫发出“喵喵！”；
通过统一的 makeSound() 函数输出动物名称和叫声。

预期输出：
柴犬:汪汪!
边牧:汪汪!
布偶:喵喵!
英短:喵喵! */

#include <format>
#include <iostream>
#include <string>

class Animal {
public:
  std::string name;
  Animal(std::string name) : name(name) {}
  virtual std::string speak() = 0;
};

class Dog : public Animal {
public:
  Dog(std::string name) : Animal(name) {}
  std::string speak() override { return "汪汪"; }
};

class Cat : public Animal {
public:
  Cat(std::string name) : Animal(name) {}
  std::string speak() override { return "喵喵"; }
};

void make_sound(Animal &animal) {
  std::cout << std::format("{}:{}!\n", animal.name, animal.speak());
}

int main() {
  Dog dog1("柴犬");
  Dog dog2("边牧");
  Cat cat1("布偶");
  Cat cat2("英短");

  make_sound(dog1);
  make_sound(dog2);
  make_sound(cat1);
  make_sound(cat2);
  return 0;
}
