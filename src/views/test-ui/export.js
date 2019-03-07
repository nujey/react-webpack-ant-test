export const A = 'A'
export const B = 'B'
export const C = 'C'

var name = "rainbow"
var age = '18'

export { name, age }

export function myModule(someArg) {
  return someArg
}

var foo = ['a', 'b', 'c']

var [a, b, c] = foo

export { a, b, c}

var a = 1; var b = 3;

[a, b] = [b, a]

const s = {
  name: 'name',
  age: 18,
  city: 'beijing'
}
const { name, age, city } = s