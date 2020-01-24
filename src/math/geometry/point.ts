class Point {

    constructor(protected x: number, protected y: number) {}

    public move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }

    public translate(x: number, y: number): Point {
        return new Point(this.x + x, this.y + y);
    }

    public distanceTo(point: Point): number {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public add(point: Point): Point {
        return this.translate(point.x, point.y);
    }
}

export const getCenter = function(width: number, height: number) {
    return new Point(width / 2, height / 2);
}

export default Point;