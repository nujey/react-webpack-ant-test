import { React } from 'react'

class Father {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  toString() {
    console.log(`name:${this.name}` + `age: ${this.age}`)
  }
}
var animal = new Father('xiaoming', 'purple')

animal.toString()

class Child extends Father {
  constructor(action) {
    super('xiaohong', 18)
    this.action = action
  }
  toString() {
    console.log(super.toString())
  }
}
var xiaohong = new Child('tiaowu')

console.log(xiaohong instanceof Child)
