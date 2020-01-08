var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
function toString(point) {
    return '(' + point.x + ', ' + point.y + ')';
}
console.log(toString({ x: 4, y: 3 }));
