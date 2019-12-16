import React, { Component } from 'react';
import './style';

class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canvasId: 'alg-graph-canvas-a',
            containerId: 'alg-graph-container-a',
            center: {
                x: 0,
                y: 0
            },
            zoom: 1
        }
        window.addEventListener('resize', () => this.drawBoxInCenter());
    }

    render() {
        return (
            <div id={this.state.containerId} className='alg-graph-container'>
                <canvas
                    id={this.state.canvasId}
                    className='alg-graph-canvas'
                ></canvas>
            </div>
        );
    }

    componentDidMount() {
        this.drawBoxInCenter();
        document.getElementById(this.state.canvasId).addEventListener('scroll', (e) => {
            console.log(e);
        });
    }

    handleScroll(e) {
        console.log(e);
    }

    drawBoxInCenter() {
        var canvas = document.getElementById(this.state.canvasId);
        var container = document.getElementById(this.state.containerId);
        var ctx = canvas.getContext('2d');
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        var center = {
            x: canvas.width / 2,
            y: canvas.height / 2,
        }
        console.log(center);
        ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
        ctx.beginPath();
        ctx.arc(center.x, center.y+500, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }

}

export default Graph;