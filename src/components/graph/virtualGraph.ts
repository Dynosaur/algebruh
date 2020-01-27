import Point from "../../math/geometry/point";
import Rectangle from "../../math/geometry/rectangle";
import Line from "../../math/geometry/line";
import Canvas from "./canvas";

class VirtualGraph {

    private topLeft: Point;
    private topRight: Point;
    private bottomLeft: Point;
    private bottomRight: Point;
    private view: Rectangle;

    constructor(private Xmin: number, private Xmax: number, private Ymin: number, private Ymax: number, private canvas: Canvas) {
        this.topLeft = new Point(this.Xmin, this.Ymax);
        this.topRight = new Point(this.Xmax, this.Ymax);
        this.bottomLeft = new Point(this.Xmin, this.Ymin);
        this.bottomRight = new Point(this.Xmax, this.Ymin);
        this.view = new Rectangle(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight);
    }

    public getTopLeft(): Point {
        return this.topLeft;
    }

    public getTopRight(): Point {
        return this.topRight;
    }

    public getBottomLeft(): Point {
        return this.bottomLeft;
    }

    public getBottomRight(): Point {
        return this.bottomRight;
    }

    public getView(): Rectangle {
        return this.view;
    }

    public translate(x: number, y: number): void {
        this.topLeft.move(x, y);
        this.topRight.move(x, y);
        this.bottomLeft.move(x, y);
        this.bottomRight.move(x, y);
    }

    public draw(): Line[] {
        return [
            new Line(
                new Point(0, 0),
                new Point(5, 5)
            ),
            new Line(
                new Point(5, 5),
                new Point(10, -10)
            )
        ];
    }

}

export default VirtualGraph;