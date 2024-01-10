/**
 * Public:
 *     在任意地方都可以访问
 * private:
 *     只能在类的内部读取，不可以在外部读取，如果想读取，就在类的内部提供public的函数进行访问
 * protected:
 *     可以在类的内部访问，也可以在子类中进行访问
 * 
 * 
 * 三者关系：Public > protected > private
 * 
 */

class Person {
  protected name: string;
  protected age: number;

  // set和get方法

  protected setName(name) {
    this.name = name;
  }
  protected getName(): string {
    return this.name;
  }

  protected say() {
    console.log(`hello:${this.getName()}`);
  }
}

class Student extends Person {
  setStudentName(name) {
    this.name = name;
  }
  getStudentName() {
    console.log(this.name);
  }
}

let s = new Student();
s.setStudentName("Ping");
s.getStudentName();