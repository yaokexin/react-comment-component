// class 的基本使用

// 在ES6中，通过 class 关键字，可以创建一个 类
// 注意：
//  1 ES6中的 class 仅仅是一个语法糖
//  2 JS中是通过 构造函数+原型 来实现继承的，其他的面向对象编程语言中一般都是通过class来实现继承的
//  3 通过类内部的 constructor() 函数来给实例对象添加属性
//      注意： constructor 是固定的名称
//  4 通过类内部的自定义方法（fn），给实例对象添加实例方法
//  5 

class Person {
  // 类的构造函数
  // name = '' 是 ES6的默认参数
  constructor(name = '', age = 1) {
    // 给实例对象添加属性
    this.name = name
    this.age = age
  }

  // 添加实例方法
  // 注意：这种方式添加的实例方法是添加到 原型对象 中的
  say() {
    console.log('我是：' + this.name + ', 我今年 ' + this.age + ' 岁了');
  }

  // 静态属性，如果使用这种方式，需要通过 babel的 babel-preset-stage-0 来解析语法
  // static test = '静态属性'

  // 静态方法
  static foo() {
    console.log('静态方法');
  }
}
// 静态属性
Person.test = '添加了一个静态属性'
Person.foo()

console.log(Person.test);

// 使用类，创建实例对象
var p = new Person('jack', 19)
console.log(p);

var p1 = new Person('rose', 20)
console.log(p1);

var p2 = new Person()
console.log(p2);

p.say()
p1.say()
p2.say()