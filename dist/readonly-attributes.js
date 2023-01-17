"use strict";
let myObject = {
    id: 1,
    name: 'Kyle'
};
// myObject.id = 1;  -- Not valid because id is defined as readonly in interface
class myClass1 {
    constructor() {
        this.id = 1;
        this.name = 'Kyle';
    }
}
//# sourceMappingURL=readonly-attributes.js.map