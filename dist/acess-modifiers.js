"use strict";
{
    class parentClass {
        constructor(key) {
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
}
//# sourceMappingURL=acess-modifiers.js.map