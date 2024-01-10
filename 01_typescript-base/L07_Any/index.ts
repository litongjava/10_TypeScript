let a: any;
a = 10;
a = "Hello iwen";
a = [10, 20];
// console.log(a);
// 我们的使用Any类型的时候一定要注意，需要自己去处理类型判断的问题
const log = (value: any) => {
  let valueType=typeof value;
  console.log(valueType);
  if (valueType === 'number') {
    return `数字类型：${value}`
  }
  if (valueType === "string") {
    return `字符串类型:${value}`
  }
  throw new Error("类型错误");
}
console.log(log('ping'))
console.log(log(10))
// console.log(log([10,20]))

let c:any;
c=10;
console.log(log(c));
let b: any[];
b = [10, '123', true];
console.log(log(b));

