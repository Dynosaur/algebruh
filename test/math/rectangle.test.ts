import Rectangle from '../../src/math/geometry/rectangle';
import Point from '../../src/math/geometry/point';

const point = (x: number, y: number): Point => {
    return new Point(x, y);
};

const createRectangle = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): Rectangle => {
    return new Rectangle(new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), new Point(x4, y4));
};

test('Rectangle.contains', () => {
    const r = createRectangle(-1, 1, 1, 1, -1, -1, 1, -1);
    expect(r.contains(point(0, 0))).toBe(true);
    expect(r.contains(point(-1, 0))).toBe(true);
    expect(r.contains(point(0, 1))).toBe(true);
    expect(r.contains(point(1, 0))).toBe(true);
    expect(r.contains(point(0, -1))).toBe(true);
});