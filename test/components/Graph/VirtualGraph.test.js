import VirtualGraph from '../../../src/components/Graph/VirtualGraph';

test('VirtualGraph.isVisible', () => {
    const graph = new VirtualGraph();
    expect(graph.isVisible(0, 0)).toBe(true);
    expect(graph.isVisible(-5, 5)).toBe(true);
    expect(graph.isVisible(-10, 0)).toBe(false);
    expect(graph.isVisible(0, 10)).toBe(false);
    expect(graph.isVisible(10, 0)).toBe(false);
    expect(graph.isVisible(1.5, 9.9)).toBe(true);
    expect(graph.isVisible(100, 0)).toBe(false);
});

test('VirtualGraph.isLineIntersect', () => {
    const graph = new VirtualGraph();
    expect(graph.isLineIntersect(0, 0, 5, 10, -5, 0, 5, 5)).toBe(true);
});

// test('VirtualGraph.isLineVisible', () => {
//     const graph = new VirtualGraph();
//     expect(graph.isLineVisible(0, 0, 1, 1)).toBe(true);
//     expect(graph.isLineVisible(-15, 0, -9, 11)).toBe(true);
//     expect(graph.isLineVisible(-100, 90, -90, 100)).toBe(false);
// });