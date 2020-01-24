import Point from "../../math/geometry/point";
import Rectangle from "../../math/geometry/rectangle";
import Line from "../../math/geometry/line";

class VirtualGraph {

    private topLeft: Point;
    private topRight: Point;
    private bottomLeft: Point;
    private bottomRight: Point;
    private view: Rectangle;

    constructor(private Xmin: number, private Xmax: number, private Ymin: number, private Ymax: number) {
        this.topLeft = new Point(this.Xmin, this.Ymax);
        this.topRight = new Point(this.Xmax, this.Ymax);
        this.bottomLeft = new Point(this.Xmin, this.Ymin);
        this.bottomRight = new Point(this.Xmax, this.Ymin);
        this.view = new Rectangle(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight);
    }

    translate(x: number, y: number): void {
        this.topLeft.move(x, y);
        this.topRight.move(x, y);
        this.bottomLeft.move(x, y);
        this.bottomRight.move(x, y);
    }

    isVisible(point: Point): boolean {
        return point.getX() > this.Xmin && point.getX() < this.Xmax && point.getY() > this.Ymin && point.getY() < this.Ymax;
    }

    isLineVisible(line: Line) {
        if (this.isVisible(new Point(line.getStart().getX(), line.getStart().getY())) || this.isVisible(new Point(line.getEnd().getX(), line.getEnd().getY()))) {
            return true;
        }
        const graphEdges = [this.view.getTop(), this.view.getLeft(), this.view.getRight(), this.view.getBottom()];
        for (let i = 0; i < graphEdges.length; i++) {
            if (line.doesIntersect(graphEdges[i])) {
                return true;
            }
        }
        return false;
    }

    draw(): Line[] {
        let lines: Line[] = [];
        this.drawGrid().forEach(line => {
            lines.push(line);
        });
        return lines;
    }

    drawGrid(): Line[] {
        return [new Line(new Point(0, 0).add(this.view.getCenter()), new Point(0, this.topLeft.getY()).add(this.view.getCenter()))];
    }
}

export default VirtualGraph;