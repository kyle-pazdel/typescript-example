// generics

function f1<T>(x:T, y:T):T[] {
  return [x, y]
}

f1('', '')
// or f1(1, 1)

// also use generics to declare a type for the remainder of the expression...
type operation<T> = (x: T, y: T) => T[]
const func: operation<number> = function (a, b) {
  return [a, b]
}
// this allows you to declare all areas of expression where type should be the same and then define that type when assigning the 'type' to a function


// generics with multiple types
{
  type genericMultipleTypes<T1, T2> = (x:T1, y:T2) => {a: T1, b:T2}
}