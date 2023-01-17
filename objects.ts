type employee = {
  id: number,
  name: string,
  nationality?: string //optional field
  data: {
    id: number,
    b: boolean
  }
  myMethod(id:number):string
}

let e:employee = {
  id: 1,
  name: 'Kyle',
  nationality: 'American',
}

interface e {
  id: number,
  name: string,
  method():string
}

type myType = string | number
//cannot use primitive types or unions with interfaces
// types are a superset of interfaces