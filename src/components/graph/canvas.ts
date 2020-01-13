import Point from './Point';
import VirtualGraph from './virtualGraph';

class Canvas {

    canvasRef: React.RefObject<HTMLInputElement>;

    constructor(ref: React.RefObject<HTMLInputElement>) {
        this.canvasRef = ref;
        this.graph = new VirtualGraph();
        this.xScale = this.getWidth() / 10;
        this.yScale = this.getHeight() / 3;
        this.center = this.getPoint(0, 0, 'graph');
    }

    getPoint(x, y, mode) {
        return new Point(x, y, this, mode);
    }

    getPointRef(x, y, mode) {
        if (!mode) {
            throw 'No mode argument provided.';
        }
        if (mode === 'screen') {
            return new Point(x + this.center.graph.x, y + this.center.graph.y, this, mode);
        }
        if (mode === 'graph') {
            return new Point(x, y, this, mode);
        }
        const point = new Point(x, y, this, mode);
    }

    getContext() {
        return this.canvasRef.current.getContext('2d');
    }

    getWidth(scale, mode) {
        if (!scale) {
            scale = 0.5;
        }

        var width = this.canvasRef.current.width * scale;

        if (mode === 'virtual') {
            return width / this.xScale;
        } else {
            return width;
        }
    }

    getHeight(scale, mode) {
        if (!scale) {
            scale = 0.5;
        }

        var height = this.canvasRef.current.height * scale;

        if (mode === 'virtual') {
            return height / this.yScale;
        } else {
            return height;
        }
    }

    clear() {
        this.getContext().clearRect(0, 0, this.getWidth(1), this.getHeight(1));
    }

    drawLine(start, end, context) {
        context.beginPath();
        context.moveTo(start.screen.x, start.screen.y);
        context.lineTo(end.screen.x, end.screen.y);
        context.stroke();
    }

    draw() {
        this.clear();
        this.drawGrid();
    }

    drawGrid() {
        
        // const context = this.getContext();

        // context.strokeStyle = '#A0A0A0';
        // context.lineWidth = 1;
        // var viewLeftSide  = Math.ceil(-this.getWidth(0.5, 'virtual') - this.center.virtual.x);
        // var viewRightSide = Math.ceil( this.getWidth(0.5, 'virtual') - this.center.virtual.x);
        // for (var i = viewLeftSide; i <= viewRightSide; i++) {
        //     this.drawLine(
        //         this.getPoint(i + this.center.virtual.x, -this.getHeight(0.5, 'virtual'), 'virtual'),
        //         this.getPoint(i + this.center.virtual.x, this.getHeight(0.5, 'virtual'), 'virtual'),
        //         context
        //     );
        // }

        // var viewBottomSide = Math.ceil(-this.getHeight(0.5, 'virtual') - this.center.virtual.y);
        // var viewTopSide    = Math.ceil( this.getHeight(0.5, 'virtual') - this.center.virtual.y);
        // for (var i = viewBottomSide; i <= viewTopSide; i++) {
        //     this.drawLine(
        //         this.getPoint(-this.getWidth(0.5, 'virtual'), i + this.center.virtual.y, 'virtual'),
        //         this.getPoint( this.getWidth(0.5, 'virtual'), i + this.center.virtual.y, 'virtual'),
        //         context
        //     );
        // }

        // context.strokeStyle = '#000000';
        // context.lineWidth = 2;
        // this.drawLine(
        //     this.center,
        //     this.getPoint(this.getWidth() + this.center.graph.x, 0),
        //     context
        // );
        // this.drawLine(
        //     this.center,
        //     this.getPoint(this.getWidth(), 0 + this.center.graph.y, 'graph'),
        //     context
        // );
        // this.drawLine(
        //     this.center,
        //     this.getPoint(0 + this.center.graph.x, -this.getHeight(), 'graph'),
        //     context
        // );
        // this.drawLine(
        //     this.center,
        //     this.getPoint(-this.getWidth(), 0 + this.center.graph.y, 'graph'),
        //     context
        // );
    }

}

export default Canvas;