import Line from './line';

class Graph {

    lines: Line[];

    constructor() {}

    addLine(line: Line) {
        this.lines.push(line);
    }
}

export default Graph;