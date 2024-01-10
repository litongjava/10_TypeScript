/**
 * static
 *  脱离了类的实例化而被调用的
 *      类名.属性或者方法名
 */

class Person {
  name: string;
  age: number;

  private static all: string = "这是一个全新的属性";
  
  public static say() {
    console.log(Person.all);
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age)
  }
}

// console.log(Person.all);
Person.say();
Student.say();