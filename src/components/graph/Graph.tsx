import * as React from 'react';
import Canvas from './screen/canvas';

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
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleResize    =    this.handleResize.bind(this);
    }

    render() {
        return (
            <div ref={this.containerRef} className='alg-graph-container'>
                <canvas ref={this.canvasRef} className='alg-graph-canvas'></canvas>
            </div>
        );
    }

    componentDidMount() {
        const canvasDOM = this.canvasRef.current;
        canvasDOM.addEventListener('click',     this.handleClick);
        canvasDOM.addEventListener('mousedown', this.handleMouseDown);
        canvasDOM.addEventListener('mouseup',   this.handleMouseUp);
        window.addEventListener('resize',    this.handleResize);

        const containerDOM = this.containerRef.current;
        canvasDOM.width  = containerDOM.clientWidth;
        canvasDOM.height = containerDOM.clientHeight;

        this.canvas.initialize();
        this.canvas.draw();
    }

    handleClick(ev) {
        //const point = this.canvas.getPoint(ev.x, ev.y);
        //console.log(point);
    }

    handleResize() {
        const canvas = this.canvasRef.current;
        const container = this.containerRef.current;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        this.canvas.handleResize();
        this.canvas.draw();
    }

    handleMouseDown() {
        this.canvasRef.current.addEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseUp() {
        this.canvasRef.current.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove(ev: MouseEvent) {
        //this.canvas.center = this.canvas.center.translate(ev.movementX, ev.movementY);
        //console.log(this.canvas.center);
        this.canvas.handleDrag(ev.movementX, ev.movementY);
        this.canvas.draw();
    }

}

export default Graph;