"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 3] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 5] = "Left";
    Direction[Direction["Right"] = 6] = "Right";
})(Direction || (Direction = {}));
let direction;
direction = Direction.Down;
console.log(direction);
//# sourceMappingURL=enum.js.map