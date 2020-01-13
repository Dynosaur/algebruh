class Point {

    constructor(private x: number, private y: number) {}

    public translate(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
}

export const getCenter = function(width: number, height: number) {
    return new Point(width / 2, height / 2);
}

export default Point;