let arr:(number|string)[]

arr = [1, 2, '3']

//tuple example...
// id-num, name-string, married?-boolean
let person: [number, string, boolean]

function useState():[object, number] {
  let state = {}
  let setState = 1
  return [state, setState]
}


let person1:[number, string, boolean]
person1 = [1, 'Kyle', true]

function sayTheirName(person:any):[number, string] {
  return [person[0], person[1]]
}

console.log(sayTheirName(person1));
