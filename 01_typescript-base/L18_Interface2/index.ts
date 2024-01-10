interface INamed {
  // 属性
  name: string;
  // 方法 在接口中，定义方法是没有方法体的  但是返回值和类型一定要添加
  print(name: string): void;
}

const sayName = (obj: INamed) => {
  obj.print(obj.name);
}

//定义一个person常量,并指定name值
const person = {
  name: "Ping",
  age: 20,
  print(name:any) {
    console.log(name);
  }
}

//定义Student类
class Student {
  name: string;
  age: number;
  constructor(name:string){
    this.name=name;
    this.age=20;
  }
  print(name:any) {
    console.log(name);
  }
}

//实例化student类
let s = new Student('Ping');

//测试sayName函数
sayName(person);
sayName(s);
