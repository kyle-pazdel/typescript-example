// generics

function f1<T>(x:T, y:T):T[] {
  return [x, y]
}

f1('', '')
// or f1(1, 1)
