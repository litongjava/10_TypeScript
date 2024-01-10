interface Person {
  // 只读属性
  readonly learn: string;
  name: string;
  // 可选属性
  age?: number;
  say(): void;
  hello?(): string;
}


class Student implements Person {
  name: string;
  learn: string;
  constructor(name:string,learn:string){
    this.name=name;
    this.learn=learn;
  }
  say() {
    console.log(this.learn);
  }

}

let s: Person = new Student("ping","New Media Art");
// s.learn = "web";
console.log(s.name);
s.say();
