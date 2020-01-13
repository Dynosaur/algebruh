import Point, { getCenter } from '../../math/geometry/point';
import Line from '../../math/geometry/line';

class VirtualGraph {

    Xmin: number;
    Xmax: number;
    Ymin: number;
    Ymax: number;
    screenCenter: Point;
    topLeft: Point;
    topRight: Point;
    bottomLeft: Point;
    bottomRight: Point;
    top: Line;
    left: Line;
    bottom: Line;
    right: Line;

    constructor() {
        this.Xmin = -10;
        this.Xmax = 10;
        this.Ymin = -10;
        this.Ymax = 10;
        this.screenCenter = getCenter(this.Xmin + this.Xmax, this.Ymin + this.Ymax);
        this.topLeft = new Point(this.Xmin, this.Ymax);
        this.topRight = new Point(this.Xmax, this.Ymax);
        this.bottomLeft = new Point(this.Xmin, this.Ymin);
        this.bottomRight = new Point(this.Xmax, this.Ymin);
        this.top = new Line(this.topLeft, this.topRight);
        this.left = new Line(this.topLeft, this.bottomLeft);
        this.right = new Line(this.topRight, this.bottomRight);
        this.bottom = new Line(this.bottomLeft, this.bottomRight);
    }

    isVisible(point: Point): boolean {
        return point.getX() > this.Xmin && point.getX() < this.Xmax && point.getY() > this.Ymin && point.getY() < this.Ymax;
    }

    isLineVisible(line: Line) {
        if (this.isVisible(new Point(line.getStart().getX(), line.getStart().getY())) || this.isVisible(new Point(line.getEnd().getX(), line.getEnd().getY()))) {
            return true;
        }
        const graphEdges = [this.top, this.left, this.right, this.bottom];
        for (let i = 0; i < graphEdges.length; i++) {
            if (line.doesIntersect(graphEdges[i])) {
                return true;
            }
        }
        return false;
    }
}

export default VirtualGraph;