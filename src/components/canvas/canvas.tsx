import * as React from 'react';
import Line from '../../math/geometry/line';

import './canvas-style';
import Point from '../../math/geometry/point';

/*

    TODO:
        - Doesn't move, implement old code into this class to allow movement

*/

interface CanvasProps {
    width: number;
    height: number;
    rref: React.RefObject<HTMLCanvasElement>;
    lines?: Line[];
    Xmin?: number;
    Xmax?: number;
    Ymin?: number;
    Ymax?: number;
    offset?: Point;
    onMouseDrag?: (ev: MouseEvent) => void;
    onScroll?: (deltaY: number) => void;
}

class Canvas extends React.Component<CanvasProps> {

    public static defaultProps = {
        Xmin: -10,
        Xmax: 10,
        Ymin: -10,
        Ymax: 10
    }

    private tL: Point;
    private tR: Point;
    private bL: Point;
    private bR: Point;
    private center: Point;
    private Xscale: number;
    private Yscale: number;

    constructor(props: CanvasProps) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseDrag = this.handleMouseDrag.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    public render(): JSX.Element {
        this.adjust();
        return(
            <canvas
                className='alg-canvas'
                ref={this.props.rref}
                width={this.props.width}
                height={this.props.height}
                onMouseDown={(this.props.onMouseDrag) ? this.handleMouseDown : null}
                onMouseUp={(this.props.onMouseDrag) ? this.handleMouseUp : null}
                onWheel={(this.props.onScroll) ? this.handleScroll : null}>
            </canvas>
        );
    }

    public componentDidUpdate(): void {
        this.draw();
    }

    private handleMouseDown(): void {
        this.props.rref.current.addEventListener('mousemove', this.handleMouseDrag);
    }

    private handleMouseUp(): void {
        this.props.rref.current.removeEventListener('mousemove', this.handleMouseDrag);
    }

    private handleMouseDrag(ev: MouseEvent): void {
        this.props.onMouseDrag(ev);
    }

    private handleScroll(ev: React.WheelEvent): void {
        this.props.onScroll(ev.deltaY);
    }

    private adjust(): void {
        this.Xscale = this.props.width / (Math.abs(this.props.Xmin) + Math.abs(this.props.Xmax));
        this.Yscale = this.props.height / (Math.abs(this.props.Ymin) + Math.abs(this.props.Ymax));
        this.tL = new Point(0, 0);
        this.tR = new Point(this.props.width, 0);
        this.bL = new Point(0, this.props.height);
        this.bR = new Point(this.props.width, this.props.height);
        this.center = new Point(this.props.width / 2, this.props.height / 2);
    }

    private point(x: number, y: number): Point {
        return new Point(
            this.center.getX() + this.props.offset.getX() + x,
            this.center.getY() + this.props.offset.getY() - y
        );
    }

    private drawLine(line: Line, style?: string, width?: number): void {
        const context = this.props.rref.current.getContext('2d');
        context.strokeStyle = (style) ? style : '#000000';
        context.lineWidth = (width) ? width : 1;
        context.beginPath();
        context.moveTo(line.getStart().getX(), line.getStart().getY());
        context.lineTo(line.getEnd().getX(), line.getEnd().getY());
        context.stroke();
    }

    private clear(): void {
        this.props.rref.current.getContext('2d').clearRect(0, 0, this.props.width, this.props.height);
    }

    private draw(): void {
        this.clear();
        this.drawGrid();
    }

    private drawGrid(): void {
        for (let i = this.props.Xmin - Math.round(this.props.offset.getX() / this.Xscale); i <= this.props.Xmax - Math.round(this.props.offset.getX() / this.Xscale); i++) {
            let xPos = i * this.Xscale + this.center.getX() + this.props.offset.getX();
            this.drawLine(
                new Line(
                    new Point(xPos, this.props.height),
                    new Point(xPos, 0)
                ), '#a0a0a0'
            );
        }
        for (let i = this.props.Ymin - Math.round(this.props.offset.getY() / this.Yscale); i <= this.props.Ymax - Math.round(this.props.offset.getY() / this.Yscale); i++) {
            let yPos = i * this.Yscale + this.center.getY() + this.props.offset.getY();
            this.drawLine(
                new Line(
                    new Point(0, yPos),
                    new Point(this.props.width, yPos)
                ), '#a0a0a0'
            );
        }
        this.drawLine(
            new Line(
                new Point(this.center.getX() + this.props.offset.getX(), this.props.height),
                new Point(this.center.getX() + this.props.offset.getX(), 0)
            ), '', 2
        );
        this.drawLine(
            new Line(
                new Point(0, this.center.getY() + this.props.offset.getY()),
                new Point(this.props.width, this.center.getY() + this.props.offset.getY())
            ), '', 2
        );
    }
}

export default Canvas;