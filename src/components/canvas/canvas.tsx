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
    }

    public render(): JSX.Element {
        this.adjust();
        return(
            <canvas
                className='alg-canvas'
                ref={this.props.rref}
                width={this.props.width}
                height={this.props.height}>
            </canvas>
        );
    }

    public componentDidUpdate(): void {
        this.draw();
    }

    private adjust(): void {
        this.Xscale = this.props.width / Math.abs(this.props.Xmin) + Math.abs(this.props.Xmax);
        this.Yscale = this.props.height / Math.abs(this.props.Ymin) + Math.abs(this.props.Ymax);
        this.tL = new Point(0, 0);
        this.tR = new Point(this.props.width, 0);
        this.bL = new Point(0, this.props.height);
        this.bR = new Point(this.props.width, this.props.height);
        this.center = new Point(this.props.width / 2, this.props.height / 2);
    }

    private drawLine(line: Line): void {
        const context = this.props.rref.current.getContext('2d');
        context.beginPath();
        context.moveTo(line.getStart().getX(), line.getStart().getY());
        context.lineTo(line.getEnd().getX(), line.getEnd().getY());
        context.stroke();
    }

    private draw(): void {
        this.drawGrid();
    }

    private drawGrid(): void {
        this.drawLine(
            new Line(
                new Point(this.center.getX(), this.props.height),
                new Point(this.center.getX(), 0)
            ),
        );
        this.drawLine(
            new Line(
                new Point(0, this.center.getY()),
                new Point(this.props.width, this.center.getY())
            ),
        );
    }
}

export default Canvas;