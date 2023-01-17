"use strict";
{
    class parentClass {
        constructor(key) {
            // to make this acually private when transpiled into js use...
            // #key:string
            this.passPhrase = '';
            this.name = 'my-name';
            this.key = key;
        }
    }
    class subClass extends parentClass {
        myMethod() {
            // return this.key;  -- this is not valid as key is a private variable
            return this.passPhrase;
        }
    }
    let a = new subClass('my-key');
    // a.key; -- not accessible because it is private
    // a.passPhrase; -- not accessible because it can only be accessed within the class
    a.name; // -- is accessible outside of class because it is public
}
//# sourceMappingURL=acess-modifiers.js.map