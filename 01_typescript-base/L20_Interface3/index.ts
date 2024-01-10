interface IPerson {
  name: string;
  say(): void;
}

const sayWath = (content: IPerson) => {
  content.say();
}

class Student implements IPerson {
  name: string;
  constructor(name:string){
    this.name=name;
  }
  say() {
    console.log(this.name);
  }
}

class Tearch implements IPerson {
  name: string;
  constructor(name:string){
    this.name=name;
  }
  
  say() {
    console.log(this.name);
  }
}

let s = new Student("我要讨论学习");
let t = new Tearch("如何教好学生");

s.say();
sayWath(s);

t.say();
sayWath(t);