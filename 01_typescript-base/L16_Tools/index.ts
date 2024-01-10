class Hello {
  name: string;
  constructor(name:string) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}

let h = new Hello("Ping");
h.say();

/**
 * ts-node:ts-node filename.ts
 * nodemon:nodemon --exec ts-node filename.ts
 *  增加nodemon的配置文件：配置快捷执行方案：npm run dev
 */