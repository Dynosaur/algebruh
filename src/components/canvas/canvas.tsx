import React from 'react';
import './canvas-style';

export interface Coordinate {
    x: number;
    y: number;
}

export interface Line {
    start: Coordinate;
    end: Coordinate;
}

interface CanvasProps {
    horizontalResolution?: number;
    verticalResolution?: number;
    reactRef?: React.RefObject<HTMLCanvasElement>;
    center?: Coordinate;
    xRange?: number;
    yRange?: number;
    lines?: Line[];
    onMouseDrag?: (moveX: number, moveY: number) => void;
    onScroll?: (moveY: number) => void;
}

class Canvas extends React.Component<CanvasProps> {

    static defaultProps = {
        horizontalResolution: 0,
        verticalResolution: 0,
        reactRef: React.createRef<HTMLCanvasElement>(),
        center: {x: 0, y: 0},
        xRange: 10,
        yRange: 10
    }

    private xMin: number;
    private xMax: number;
    private yMin: number;
    private yMax: number;

    constructor(props: CanvasProps) {
        super(props);
        this.startMouseDragListen = this.startMouseDragListen.bind(this);
        this.stopMouseDragListen   = this.stopMouseDragListen  .bind(this);
        this.handleMouseDrag = this.handleMouseDrag.bind(this);
        this.handleScroll    = this.handleScroll   .bind(this);
    }

    public render(): JSX.Element {
        return(
            <canvas
                className='alg-canvas'
                ref={this.props.reactRef}
                width={this.props.horizontalResolution}
                height={this.props.verticalResolution}
                onMouseDown={(this.props.onMouseDrag) ? this.startMouseDragListen : null}
                onMouseUp={(this.props.onMouseDrag) ? this.stopMouseDragListen : null}
                onWheel={(this.props.onScroll) ? this.handleScroll : null}>
            </canvas>
        );
    }

    public componentDidUpdate(): void {
        this.draw();
    }

    private startMouseDragListen(): void {
        this.props.reactRef.current.addEventListener('mousemove', this.handleMouseDrag);
    }

    private stopMouseDragListen(): void {
        this.props.reactRef.current.removeEventListener('mousemove', this.handleMouseDrag);
    }

    private handleMouseDrag(ev: MouseEvent): void {
        this.props.onMouseDrag(ev.movementX, ev.movementY);
    }

    private handleScroll(ev: React.WheelEvent): void {
        this.props.onScroll(ev.deltaY);
    }

    private clear(): void {
        const context = this.props.reactRef.current.getContext('2d');
        context.clearRect(0, 0, this.props.horizontalResolution, this.props.verticalResolution);
    }

    private convertX(logical: number): number {
        return (logical - this.xMin) / (this.xMax - this.xMin) * this.props.horizontalResolution;
    }

    private convertY(logical: number): number {
        return this.props.verticalResolution - (logical - this.yMin) / (this.yMax - this.yMin) * this.props.verticalResolution;
    }

    private drawLine(startX: number, startY: number, endX: number, endY: number): void {
        const context = this.props.reactRef.current.getContext('2d');
        context.beginPath();
        context.moveTo(this.convertX(startX), this.convertY(startY));
        context.lineTo(this.convertX(endX), this.convertY(endY));
        context.stroke();
    }

    private draw(): void {
        this.clear();
    }

    private drawGrid(): void {
        this.drawLine(0, 0, 0, this.yMax);
        this.drawLine(0, 0, 0, this.yMin);
    }
}

export default Canvas;