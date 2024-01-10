// es6 http://es6.ruanyifeng.com/#docs/class
class Person {
  age: number;
  name: string;
}

// 类的概念：
let p = new Person();
p.name = 'ping';
p.age = 30;

console.log(p);
console.log(p.name, p.age);

