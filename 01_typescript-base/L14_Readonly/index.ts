class Person {
  name: string;
  age: number;

  // 不可以被修改的
  readonly hello: string = 'Hello ReadOnly';

}

let p = new Person();
// p.hello = 'hello';
console.log(p.hello);
p.name = 'Ping';
console.log(p.name);

