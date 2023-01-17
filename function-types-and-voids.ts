// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void -- SHOULD NOT return anything
function log(message: string | number) : void {
  console.log(message);
} 

// function type
type opFun = (x: number, y: number) => number

interface operatorFun {
  (x: number, y: number): number
}

{
  const add: opFun = (x, y) => x + y
  const myFun: opFun = function (x, y) {
    return x + y
  }
}

{
  const add: operatorFun = (x, y) => x + y
}


// Interfaces with functions
interface myInterface2 {
  add(x: number, y: number): number,
  id: number
}