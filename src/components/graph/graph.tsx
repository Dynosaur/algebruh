import * as React from 'react';
import Canvas from './canvas';

import './Graph.scss';

class Graph extends React.Component {

    containerRef: React.RefObject<HTMLDivElement>;
       canvasRef: React.RefObject<HTMLCanvasElement>;
          canvas: Canvas;

    constructor(props: any) {
        super(props);
        this.containerRef = React.createRef();
        this.canvasRef = React.createRef();
        this.canvas = new Canvas(this.canvasRef);

        this.handleClick     =     this.handleClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp   =   this.handleMouseUp.bind(this);
        this.handleMouseDrag = this.handleMouseDrag.bind(this);
        this.handleResize    =    this.handleResize.bind(this);
        this.handleScroll    =    this.handleScroll.bind(this);
    }

    render(): JSX.Element {
        return (
            <div ref={this.containerRef} className='alg-graph-container'>
                <canvas ref={this.canvasRef} className='alg-graph-canvas'></canvas>
            </div>
        );
    }

    componentDidMount(): void {
        const canvasDOM = this.canvasRef.current;
        canvasDOM.addEventListener('click',     this.handleClick);
        canvasDOM.addEventListener('mousedown', this.handleMouseDown);
        canvasDOM.addEventListener('mouseup',   this.handleMouseUp);
        canvasDOM.addEventListener('wheel',    this.handleScroll);
        window.addEventListener('resize',    this.handleResize);

        const containerDOM = this.containerRef.current;
        canvasDOM.width  = containerDOM.clientWidth;
        canvasDOM.height = containerDOM.clientHeight;

        this.canvas.initialize();
        this.canvas.draw();
    }

    handleClick(ev: MouseEvent): void {
        //const point = this.canvas.getPoint(ev.x, ev.y);
        //console.log(point);
    }

    handleResize(): void {
        const canvas = this.canvasRef.current;
        const container = this.containerRef.current;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        this.canvas.handleResize();
        this.canvas.draw();
    }

    handleMouseDown(): void {
        this.canvasRef.current.addEventListener('mousemove', this.handleMouseDrag);
    }

    handleMouseUp(): void {
        this.canvasRef.current.removeEventListener('mousemove', this.handleMouseDrag);
    }

    handleMouseDrag(ev: MouseEvent): void {
        //this.canvas.center = this.canvas.center.translate(ev.movementX, ev.movementY);
        //console.log(this.canvas.center);
        this.canvas.handleMouseDrag(ev.movementX, ev.movementY);
    }

    handleScroll(ev: WheelEvent): void {
        this.canvas.handleScroll(-ev.deltaY);
    }

}

export default Graph;