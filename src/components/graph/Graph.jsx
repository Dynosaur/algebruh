import React, { Component } from 'react';
import './style';

class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canvasId: 'alg-graph-canvas1'
        }
        window.addEventListener('resize', () => this.drawBoxInCenter());
    }

    render() {
        return(
            <canvas id={this.state.canvasId} className='alg-graph-canvas'></canvas>
        );
    }

    componentDidMount() {
        this.drawBoxInCenter();
    }

    drawBoxInCenter() {
        var canvas = document.getElementById(this.state.canvasId);
        var pen = canvas.getContext('2d');
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        pen.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
        pen.fillStyle = '#000000';
        var center = {
            x: canvas.width/2,
            y: canvas.height/2
        }
        console.log(center);
        pen.fillRect(center.x-5, center.y-5, center.x+5, center.y+5);
    }

}

export default Graph;