import Point from './point';
import Line from './line';

class Rectangle {

    private top: Line;
    private left: Line;
    private right: Line;
    private bottom: Line;

    constructor(private topLeft: Point, private topRight: Point, private lowLeft: Point, private lowRight: Point) {
        this.top = new Line(topLeft, topRight);
        this.left = new Line(topLeft, lowLeft);
        this.right = new Line(topRight, lowRight);
        this.bottom = new Line(lowLeft, lowRight);
    }

    public contains(point: Point) {
        return point.getX() >= this.topLeft.getX() && point.getX() <= this.topRight.getX() && point.getY() >= this.lowLeft.getY() && point.getY() <= this.topLeft.getY();
    }

    public getTop(): Line {
        return this.top;
    }

    public getLeft(): Line {
        return this.left;
    }

    public getRight(): Line {
        return this.right;
    }

    public getBottom(): Line {
        return this.bottom;
    }

    public getCenter(): Point {
        return new Point(this.top.getMidpoint().getX(), this.left.getMidpoint().getY());
    }
}

export default Rectangle;