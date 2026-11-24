/*
 * 要求：定义狗和猫两种类型，分别创建柴犬、边牧、布偶、英短四个对象；狗发出“汪汪！”，猫发出“喵喵！”；
 * 通过统一的 makeSound() 函数输出动物名称和叫声。
 *
 * 预期输出：
 * 柴犬:汪汪!
 * 边牧:汪汪!
 * 布偶:喵喵!
 * 英短:喵喵!
 */
package main

import "fmt"

type Animal interface {
	getName() string
	speak() string
}

type Dog struct {
	name string
}

func (d Dog) getName() string {
	return d.name
}

func (d Dog) speak() string {
	return "汪汪"
}

type Cat struct {
	name string
}

func (c Cat) getName() string {
	return c.name
}

func (c Cat) speak() string {
	return "喵喵"
}

func makeSound(animal Animal) {
	fmt.Printf("%s:%s!\n", animal.getName(), animal.speak())
}

func main() {
	dog1 := Dog{name: "柴犬"}
	dog2 := Dog{name: "边牧"}
	cat1 := Cat{name: "布偶"}
	cat2 := Cat{name: "英短"}
	makeSound(dog1)
	makeSound(dog2)
	makeSound(cat1)
	makeSound(cat2)
}
