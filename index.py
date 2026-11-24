"""要求：定义狗和猫两种类型，分别创建柴犬、边牧、布偶、英短四个对象；狗发出“汪汪！”，猫发出“喵喵！”；
通过统一的 makeSound() 函数输出动物名称和叫声。

预期输出：
柴犬:汪汪!
边牧:汪汪!
布偶:喵喵!
英短:喵喵!"""


class Dog:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "汪汪"


class Cat:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "喵喵"


def make_sound(animal):
    print(f"{animal.name}:{animal.speak()}!")


dog1 = Dog("柴犬")
dog2 = Dog("边牧")
cat1 = Cat("布偶")
cat2 = Cat("英短")

make_sound(dog1)
make_sound(dog2)
make_sound(cat1)
make_sound(cat2)
