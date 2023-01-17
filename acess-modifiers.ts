{
  class parentClass {
    private key:string
    protected passPhrase:string = ''
    public name:string = 'my-name'
    constructor(key:string) {
      this.key = key
    }
  }

  class subClass extends parentClass {
    myMethod() {
      // return this.key;  -- this is not valid as key is a private variable
      return this.passPhrase;
    }
  }
}
