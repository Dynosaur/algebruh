import Point from './Point';

class Line {

    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.slope = (this.end.y - this.start.y) / (this.end.x - this.start.x);
        this.intercept = start.y - this.slope * start.x;
    }

    getY(x) {
        return this.slope * x + this.intercept;
    }

    doesIntercept(line) {

    }

    // intercept(line) {
    //     this.slope * x + this.intercept = line.slope * x + line.intercept;
    //     this.slope * x = line.slope * x + line.intercept - this.intercept;
    //     var x = (line.slope * x + line.intercept - this.intercept) / this.slope;
    // }
}

export default Line;