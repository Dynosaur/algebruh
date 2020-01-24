import VirtualGraph from "./virtualGraph";
import Point from "../../math/geometry/point";
import Line from "../../math/geometry/line";

class Canvas {

    private graph: VirtualGraph;
    private xScale: number;
    private yScale: number;
    private center: Point;

    constructor(private canvasRef: React.RefObject<HTMLCanvasElement>) {
        this.graph = new VirtualGraph(-10, 10, -10, 10);
        this.xScale = 0;
        this.yScale = 0;
        this.center = new Point(0, 0);
    }

    public handleDrag(x: number, y: number): void {
        this.graph.translate(x / this.xScale, -y / this.yScale);
    }

    public handleResize(): void {
        this.initialize();
    }

    public initialize(): void {
        this.xScale = this.getWidth() / 10;
        this.yScale = this.getHeight() / 3;
        this.center = new Point(this.getWidth() / 2, this.getHeight() / 2);
        console.log(this.transPoint(new Point(0, 10)));
    }

    public getWidth(): number {
        return this.canvasRef.current.width;
    }

    public getHeight(): number {
        return this.canvasRef.current.height;
    }

    public getClientWidth(): number {
        return this.canvasRef.current.clientWidth;
    }

    public getClientHeight(): number {
        return this.canvasRef.current.clientHeight;
    }

    // getPoint(x, y, mode) {
    //     return new Point(x, y, this, mode);
    // }

    // getPointRef(x, y, mode) {
    //     if (!mode) {
    //         throw 'No mode argument provided.';
    //     }
    //     if (mode === 'screen') {
    //         return new Point(x + this.center.graph.x, y + this.center.graph.y, this, mode);
    //     }
    //     if (mode === 'graph') {
    //         return new Point(x, y, this, mode);
    //     }
    //     const point = new Point(x, y, this, mode);
    // }

    getContext() {
        return this.canvasRef.current.getContext('2d');
    }

    // getWidth(scale, mode) {
    //     if (!scale) {
    //         scale = 0.5;
    //     }

    //     var width = this.canvasRef.current.width * scale;

    //     if (mode === 'virtual') {
    //         return width / this.xScale;
    //     } else {
    //         return width;
    //     }
    // }

    // getHeight(scale, mode) {
    //     if (!scale) {
    //         scale = 0.5;
    //     }

    //     var height = this.canvasRef.current.height * scale;

    //     if (mode === 'virtual') {
    //         return height / this.yScale;
    //     } else {
    //         return height;
    //     }
    // }

    private transPoint(point: Point): Point {
        return new Point(point.getX() * this.xScale + this.center.getX(), -point.getY() * this.yScale + this.center.getY());
    }

    private transLine(line: Line): Line {
        return new Line(this.transPoint(line.getStart()), this.transPoint(line.getEnd()));
    }

    clear() {
        this.getContext().clearRect(0, 0, this.getWidth(), this.getHeight());
    }

    drawLine(line: Line, context: CanvasRenderingContext2D) {
        context.beginPath();
        context.moveTo(line.getStart().getX(), line.getStart().getY());
        context.lineTo(line.getEnd().getX(), line.getEnd().getY());
        context.stroke();
    }

    draw() {
        this.clear();
        this.drawGrid();
    }

    drawGrid() {
        const context = this.getContext();

        this.graph.drawGrid().forEach(line => {
            console.log(this.transLine(line));
            this.drawLine(this.transLine(line), context);
        });
        // this.drawLine(this.center, new Point(this.getWidth() / 2, 0), context);
        // this.drawLine(this.center, new Point(this.getWidth(), this.getHeight() / 2), context);
        // this.drawLine(this.center, new Point(0, this.getHeight() / 2), context);
        // this.drawLine(this.center, new Point(this.getWidth() / 2, this.getHeight()), context);
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