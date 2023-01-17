type myInterface = {
  readonly id: number,
  name: string
}

let myObject:myInterface = {
  id: 1,
  name: 'Kyle'
}

// myObject.id = 1;  -- Not valid because id is defined as readonly in interface

class myClass1 implements myInterface {
  id = 1;
  name = 'Kyle'
}