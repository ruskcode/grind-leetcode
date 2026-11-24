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
  String getName();

  String speak();
}

class Dog implements Animal {
  private String name;

  public Dog(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public String speak() {
    return "汪汪";
  }
}

class Cat implements Animal {
  private String name;

  public Cat(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public String speak() {
    return "喵喵";
  }
}

public class index {
  static void makeSound(Animal animal) {
    System.out.println(String.format("%s:%s!", animal.getName(), animal.speak()));
  }

  public static void main(String[] args) {
    Dog dog1 = new Dog("柴犬");
    Dog dog2 = new Dog("边牧");
    Cat cat1 = new Cat("布偶");
    Cat cat2 = new Cat("英短");
    makeSound(dog1);
    makeSound(dog2);
    makeSound(cat1);
    makeSound(cat2);
  }
}
