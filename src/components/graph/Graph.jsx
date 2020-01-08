import React, { Component } from 'react';
import Point from './Point';
import Canvas from './Canvas';

import './Graph.scss';

/**
 * TODO
 * ----
 * - I don't like the implementation of Canvas.center
 * - Find a way around the event handler bindings? They take up a lot of space in the constructor
 */

class Graph extends Component {

    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.canvasRef = React.createRef();
        this.canvas = undefined;

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

        this.canvas = new Canvas(this.canvasRef);
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
        this.canvas.draw();
    }

    handleMouseDown() {
        this.canvasRef.current.addEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseUp() {
        this.canvasRef.current.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove(ev) {
        this.canvas.center = this.canvas.center.translate(ev.movementX, ev.movementY);
        console.log(this.canvas.center);
        this.canvas.draw();
    }

}

export default Graph;