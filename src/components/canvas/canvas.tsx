import React, { FC, RefObject, useEffect } from 'react';
import Draw from './draw';
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
    width: number;
    height: number;
    reactRef: RefObject<HTMLCanvasElement>;
    onMouseDrag: (moveX: number, moveY: number) => void;
    onScroll: (moveY: number) => void;
    xOffset: number;
    yOffset: number;
}

const Canvas2: FC<CanvasProps> = (props) => {

    const startMouseDragListen = () => {
        window.addEventListener('mousemove', handleMouseDrag);
    }

    const stopMouseDragListen = () => {
        window.removeEventListener('mousemove', handleMouseDrag);
    }

    const handleMouseDrag = (ev: MouseEvent) => {
        props.onMouseDrag(ev.movementX, ev.movementY);
    }

    const handleScroll = (ev: MouseWheelEvent) => {
        props.onScroll(ev.deltaY);
    }

    const draw = () => {
        const draw = new Draw(props.reactRef.current, props.xOffset, props.yOffset);
        draw.clear();
        draw.reticle();
    }

    useEffect(() => {
        console.log(props.xOffset);
        // draw();
    });

    useEffect(() => {
        const canvasDOM = props.reactRef.current;
        canvasDOM.addEventListener('mousedown', startMouseDragListen);
        window.addEventListener('mouseup', stopMouseDragListen);
        canvasDOM.addEventListener('wheel', handleScroll);
        return () => {
            canvasDOM.removeEventListener('mousedown', startMouseDragListen);
            window.removeEventListener('mouseup', stopMouseDragListen);
            canvasDOM.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return(
        <canvas className='alg-canvas' width={props.width} height={props.height} ref={props.reactRef} />
    );
}

/*
class Canvas extends React.Component<CanvasProps> {

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
*/

export default Canvas2;