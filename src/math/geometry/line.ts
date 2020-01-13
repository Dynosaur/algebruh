import Point from './point';

class Line {

    private slope: number;
    private intercept: number;
    private A: number;
    private B: number;
    private C: number;

    constructor(private start: Point, private end: Point) {
        this.slope = (end.getY() - start.getY()) / (end.getX() - start.getX());
        this.intercept = -this.slope * start.getX() + start.getY();
        this.A = start.getY() - end.getY();
        this.B = this.end.getX() - this.start.getX();
        this.C = -(this.start.getX() * this.end.getY() - this.end.getX() * this.start.getY());
    }

    public getY(x: number): number {
        if (x < this.start.getX() || x > this.end.getX()) {
            return undefined;
        }
        return x * this.slope + this.intercept;
    }

    public contains(point: Point): boolean {
        return this.getY(point.getX()) === point.getY();
    }

    public doesIntersect(line: Line): boolean {
        const D  = this.A * line.B - this.B * line.A;
        if (D === 0) {
            return undefined;
        }
        const Dx = this.C * line.B - this.B * line.C;
        const Dy = this.A * line.C - this.C * line.A;
        const intersection = new Point(Dx/D, Dy/D);
        return this.contains(intersection) && line.contains(intersection);
    }

    public intersectionWith(line: Line): Point {
        const D  = this.A * line.B - this.B * line.A;
        if (D === 0) {
            return undefined;
        }
        const Dx = this.C * line.B - this.B * line.C;
        const Dy = this.A * line.C - this.C * line.A;
        const intersection = new Point(Dx/D, Dy/D);
        if (this.contains(intersection) && line.contains(intersection)) {
            return intersection;
        } else {
            return undefined;
        }
    }

    public getStart(): Point {
        return this.start;
    }

    public getEnd(): Point {
        return this.end;
    }

    public getSlope(): number {
        return this.slope;
    }

    public getIntercept(): number {
        return this.intercept;
    }

    public getA(): number {
        return this.A;
    }

    public getB(): number {
        return this.B;
    }

    public getC(): number {
        return this.C;
    }

}

export default Line;