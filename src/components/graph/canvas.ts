import VirtualGraph from "./virtualGraph";
import Point from "../../math/geometry/point";
import Line from "../../math/geometry/line";

class Canvas {

    private graph: VirtualGraph;
    private xScale: number;
    private yScale: number;
    private center: Point;
    private displacement: Point;

    constructor(private canvasRef: React.RefObject<HTMLCanvasElement>) {
        this.graph = new VirtualGraph(-10, 10, -10, 10, this);
        this.xScale = 0;
        this.yScale = 0;
        this.center = new Point(0, 0);
        this.displacement = new Point(0, 0);
    }

    public getWidth(): number {
        return this.canvasRef.current.width;
    }

    public getHeight(): number {
        return this.canvasRef.current.height;
    }

    public getXScale(): number {
        return this.xScale;
    }

    public getYScale(): number {
        return this.yScale;
    }

    public getCenter(): Point {
        return this.center;
    }

    private getContext(): CanvasRenderingContext2D {
        return this.canvasRef.current.getContext('2d');
    }

    public handleMouseDrag(x: number, y: number): void {
        this.center.move(x, y);
        this.displacement.move(x, y);
        this.graph.translate(-x/this.xScale, y/this.yScale);
        this.draw();
    }

    public handleResize(): void {
        this.initialize();
    }

    public handleScroll(deltaY: number): void {
        if (deltaY < 0) {
            this.xScale /= 2;
            this.yScale /= 2;
        } else {
            this.xScale *= 2;
            this.yScale *= 2;
        }
        this.draw();
    }

    public initialize(): void {
        this.xScale = this.getWidth() / 20;
        this.yScale = this.getHeight() / 20;
        this.center = new Point(this.getWidth() / 2, this.getHeight() / 2);
    }

    public transX(x: number): number {
        return x * this.xScale + this.center.getX();
    }

    public transY(y: number): number {
        return -y * this.yScale + this.center.getY();
    }

    public transPoint(point: Point): Point {
        return new Point(this.transX(point.getX()), this.transY(point.getY()));
    }

    public transLine(line: Line): Line {
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
        console.log('New Frame');
        this.clear();
        this.drawGrid();

        this.graph.draw().forEach(line => {
            this.drawLine(this.transLine(line), this.getContext());
        });
    }

    drawGrid() {
        const context = this.getContext();

        // const Xrange = this.graph.getTopRight().getX() - this.graph.getTopLeft().getX();
        // const Yrange = this.graph.getTopLeft().getY() - this.graph.getBottomRight().getY();
        // console.log('xRange: ' + Xrange);
        // console.log('yRange: ' + Yrange);

        context.strokeStyle = '#aaa';
        console.log(this.xScale);
        const xDiff = Math.floor(this.displacement.getX() / this.xScale);
        console.log(xDiff);
        for(let i = -xDiff * this.xScale; i < this.getWidth() - xDiff * this.xScale; i += this.xScale) {
            this.drawLine(
                new Line(
                    new Point(i + this.displacement.getX(), this.getHeight()),
                    new Point(i + this.displacement.getX(), 0)
                ),
                context
            );
        }
        const yDiff = Math.floor(this.displacement.getY() / this.yScale);
        for(let i = -yDiff * this.yScale; i < this.getHeight() - yDiff * this.yScale; i += this.yScale) {
            this.drawLine(
                new Line(
                    new Point(0, i + this.displacement.getY()),
                    new Point(this.getWidth(), i + this.displacement.getY())
                ),
                context
            );
        }

        context.strokeStyle = '#000';
        this.drawLine(
            new Line(
                new Point(this.getCenter().getX(), this.getHeight()),
                new Point(this.getCenter().getX(), 0)
            ),
            context
        );
        this.drawLine(
            new Line(
                new Point(0, this.center.getY()),
                new Point(this.getWidth(), this.center.getY())
            ),
            context
        );
    }

}

export default Canvas;