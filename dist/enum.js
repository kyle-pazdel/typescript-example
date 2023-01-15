"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 3] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 5] = "Left";
    Direction[Direction["Right"] = 6] = "Right";
})(Direction || (Direction = {}));
var D;
(function (D) {
    D["Up"] = "Up";
    D["Down"] = "Down";
    D["Left"] = "Left";
    D["Right"] = "Right";
})(D || (D = {}));
let direction;
direction = D.Down;
console.log(direction);
//# sourceMappingURL=enum.js.map