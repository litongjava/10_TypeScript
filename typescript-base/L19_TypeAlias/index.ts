type Name = string;
let myName:Name = "Ping";
console.log(myName);

type User = {
  name: string;
  age: number
}

const adminUser: User = {
  name: 'Ping',
  age: 20
}
console.log(adminUser);

// type User = {
//     emial:string;
// }


interface IUser {
  name: string;
  age: number
}

interface IUser {
  email: string;
}

const interUser: IUser = {
  name: "ping",
  age: 18,
  email: "ping@qq.com"
}

console.log(interUser);
