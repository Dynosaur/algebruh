// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// class Line {
//     constructor(start, end) {
//         this.start = start;
//         this.end = end;
//         this.slope = (this.end.y - this.start.y) / (this.end.x - this.start.x);
//         this.intercept = this.start.y - this.slope * this.start.x;
//         if (this.slope < 0) {
//             this.A = -this.slope;
//             this.B = 1;
//             this.C = this.intercept;
//         } else {
//             this.A = this.slope;
//             this.B = -1;
//             this.C = -this.intercept;
//         }
//     }

//     intercept(line) {

//     }
// }

// var line1 = new Line(new Point(-2, -9), new Point(2, 47));
// var line2 = new Line(new Point(-22, 5), new Point(8, -10));
// console.log({A: line2.A, B: line2.B, C: line2.C});
// console.log({A: line2.start.y - line2.end.y});