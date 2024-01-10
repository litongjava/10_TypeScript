/**
 * 鸭子类型：
 * 接口：通过的规范
 *      USB接口：U盘  打印机 ...
 * 
 * ts:编译时候直接报错，而非在运行过程中因为某些不确定的因素而报错
 */

const sayName = (obj:any) => {
  console.log(obj.name);
}

const person = {
  name: 'ping',
  age: 20
}
sayName(person);

const student = {
  learn: "web",
  name: "张三"
}
sayName(student);

class Teacher {
  name: string;
  age: number;
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;

  }
}

let t = new Teacher('张老师',12);
sayName(t);

const demo = {
  hello: "hello"
}
sayName(demo); 
// undefined

interface Named {
  // 属性
  name: string;
}

const sayName2 = (obj:Named) => {
  console.log(obj.name);
}
sayName2(person);
sayName2(student);
sayName2(t);
// sayName2(demo); 