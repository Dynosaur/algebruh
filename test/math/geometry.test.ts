import Point from '../../src/math/geometry/point';
import Line from '../../src/math/geometry/line';

const makeLine = (x1: number, y1: number, x2: number, y2: number): Line => {
    return new Line(new Point(x1, y1), new Point(x2, y2));
};

test('line.getY tests', () => {
    const line = makeLine(-1, -1, 1, 1);
    expect(line.getY(0)).toBe(0);
    expect(line.getY(-2)).toBeUndefined();
    expect(line.getY(2)).toBeUndefined();
});

test('line.contains tests', () => {
    const line = makeLine(-1, -1, 1, 1);
    expect(line.contains(new Point(0, 0))).toBe(true);
    expect(line.contains(new Point(-2, -2))).toBe(false);
    expect(line.contains(new Point(2,2))).toBe(false);
});

test('line.doesIntersect tests', () => {
    const line1 = makeLine(-5, 0, 5, 7);
    const line2 = makeLine(-4, -3, 6, 9);
    expect(line1.doesIntersect(line2)).toBe(true);
});

// test('line.intersectionWith tests', () => {
//     const line1 = makeLine(-1, -1, 1, 1);
//     const line2 = makeLine(-1, 1, 1, -1);
//     expect(line1.intersectionWith(line2)).toBeCloseTo(new Point(0, 0));
// });