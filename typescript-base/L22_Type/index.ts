/**
 * 断言和类型转换有点相似，但是并非真正的类型转换
 * 
 */
let x: any = "hi ping";
let s = x.substring(0, 2);
console.log(s);
// 编译的时候，是不知道什么类型的！！！
let s1 = (<string>x).substring(0, 2);
console.log(s1);


function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
console.log(getLength(200));

// 接口
interface Person {
  name: string;
  age: number;
}
//将person对象断言成Person接口类型
let person = {} as Person;
person.name = "iwen";
person.age = 20;
console.log(person);

// 第二种写法
let person1 = <Person>{
  name: "iwen",
  age: 20
}
console.log(person1);

// 声明person2 是Person的类型
let person2: Person = {
  name: "heloo",
  age: 20
}