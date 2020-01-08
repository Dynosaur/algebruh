import Line  from '../../../../src/components/Graph/geometry/Line';
import Point from '../../../../src/components/Graph/geometry/Point';

test('Line.slope', () => {
    expect(new Line(new Point(0, 0), new Point(1, 1)).slope).toBe(1);
    expect(new Line(new Point(0, 0), new Point(1, 10)).slope).toBe(10);
    expect(new Line(new Point(0, 10), new Point(1, 0)).slope).toBe(-10);
});

test('Line.intercept', () => {
    expect(new Line(new Point(-2, 5), new Point(1, 10)).intercept).toBeCloseTo(8.3, 0.1);
    expect(new Line(new Point(1, 10), new Point(-2, 5)).intercept).toBeCloseTo(8.3, 0.1);
});