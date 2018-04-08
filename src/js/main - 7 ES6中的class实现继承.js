// ES6中类的继承

// 案例：让学生类 继承 Person类
class Person {
  constructor(height) {
    this.name = '人'
    this.age = 1
    this.height = height
  }
}

// Student类继承Person类
// 注意：在 Student类中，必须先调用 super() 才能给自己添加属性
class Student extends Person {
  constructor() {
    // super表示的是：当前类继承的类的 constructor
    //      在此处指的是：Person类中的 constructor
    // super()
    super(180)

    this.gender = 'male'
    this.stuNo = '100101'
  }
}

var stu = new Student()
console.log(stu);
