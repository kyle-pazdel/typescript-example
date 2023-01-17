// type assertion

{
  let x:any = 2

  let a:number = x as number // asserts type of number on x above
  let b:number = <number>x // can also be written like this
}