"use strict";
let arr;
arr = [1, 2, '3'];
//tuple example...
// id-num, name-string, married?-boolean
let person;
function useState() {
    let state = {};
    let setState = 1;
    return [state, setState];
}
let person1;
person1 = [1, 'Kyle', true];
function sayTheirName(person) {
    return [person[0], person[1]];
}
console.log(sayTheirName(person1));
//# sourceMappingURL=array.js.map