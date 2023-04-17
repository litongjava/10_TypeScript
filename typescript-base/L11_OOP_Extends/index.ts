/**
 * 把类看成一个模板
 *     worker
 *     student
 */

class Person {
  name: string;
  age: number;

  say() {
    console.log("我是说话");
  }
  hello() {
    console.log("hello World");
  }
}


class Student extends Person {
  // 就近原则
  say() {
    console.log("我是student的say方法");
  }
  hello() {
    console.log("student Hello");
  }
  studentHello() {
    // 强行调用父类的方法
    super.hello();
  }
}
let p: Person = new Person();
p.say();

let s: Student = new Student();
s.say();


// 多态
let s2: Person = new Student();
s2.say();
//编译报错
//s2.studentHello();