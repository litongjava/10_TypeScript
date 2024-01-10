// 数字   字符串
const log = (value: string|number) => {
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
console.log(log('123'));

function isNumber(value: any): value is number {
  return typeof value === "number";
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

const log2 = (value: string | number|null|undefined) => {
  console.log(typeof value);
  if (isNumber(value)) {
    return `数字类型：${value}`
  }
  if (isString(value)) {
    return `字符串类型:${value}`
  }
  // throw new Error("类型错误");
  console.log("function end")
}
console.log(log2("ping"));
console.log(log2(123));
console.log(log2(null));
console.log(log2(undefined));






