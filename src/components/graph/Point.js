import Canvas from './Canvas';

class Point {

    constructor(x, y, canvas, mode) {
        if (!mode) {
            mode = 'screen';
        }

        this.canvas = canvas;

        this.screen = {
            x: x,
            y: y
        };
        this.graph = {
            x: x,
            y: y
        };
        this.virtual = {
            x: x,
            y: y
        };

        var canvasDOM = canvas.canvasRef.current;
        if (mode === 'screen') {
            this.graph.x -= canvasDOM.width / 2;
            this.graph.y = canvasDOM.height / 2 - this.graph.y;
            this.virtual.x = this.graph.x / canvas.xScale;
            this.virtual.y = this.graph.y / canvas.yScale;
        }
        if (mode === 'graph') {
            this.screen.x += canvasDOM.width / 2;
            this.screen.y = canvasDOM.height / 2 - this.screen.y;
            this.virtual.x /= canvas.xScale;
            this.virtual.y /= canvas.yScale;
        }
        if (mode === 'virtual') {
            this.graph.x *= canvas.xScale;
            this.graph.y *= canvas.yScale;
            this.screen.x = this.graph.x + canvasDOM.width / 2;
            this.screen.y = canvasDOM.height / 2 - this.graph.y;
        }
    }

    translate(x, y, mode) {
        if (!mode) {
            mode = 'screen';
        }
        return new Point(this[mode].x + x, this[mode].y + y, this. canvas, mode);
    }

}

export default Point;