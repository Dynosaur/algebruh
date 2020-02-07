import * as React from 'react';

import Button  from '../../components/button';
import Canvas  from '../../components/canvas';
import Toolbar from '../../components/toolbar';

import './graph-page-style';
import Point from '../../math/geometry/point';

interface GraphProps {}

interface GraphState {
    width: number;
    height: number;
    mathFields: number;
    offset: Point;
    Xmin: number;
    Xmax: number;
    Ymin: number;
    Ymax: number;
}

class GraphPage extends React.Component<GraphProps, GraphState> {

    private canvasContainerRef: React.RefObject<HTMLDivElement>;
    private canvasRef: React.RefObject<HTMLCanvasElement>;

    constructor(props: GraphProps) {
        super(props);
        this.canvasContainerRef = React.createRef();
        this.canvasRef = React.createRef();
        this.state = {
            width: 0,
            height: 0,
            mathFields: 1,
            offset: new Point(0, 0),
            Xmin: -10,
            Xmax: 10,
            Ymin: -10,
            Ymax: 10
        };

        this.handleContainerResize = this.handleContainerResize.bind(this);
        this.handleToolbarButtonClick = this.handleToolbarButtonClick.bind(this);
        this.handleMouseDrag = this.handleMouseDrag.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    private setWidthHeight(): void {
        const containerDOM = this.canvasContainerRef.current;
        if (containerDOM == null) {
            this.setState({
                width: 0,
                height: 0
            });
        } else {
            this.setState({
                width: containerDOM.clientWidth,
                height: containerDOM.clientHeight
            });
        }
    }

    public componentDidMount(): void {
        this.setWidthHeight();

        window.addEventListener('resize', this.handleContainerResize);
    }

    public render(): JSX.Element {
        return (
            <div className='alg-graph-container'>
                <div className='alg-toolbar-container'>
                    <Toolbar width={this.state.width} height={this.state.height} fieldNum={this.state.mathFields} onChange={this.handleFieldChange} />
                    <Button onClick={this.handleToolbarButtonClick}>+</Button>
                </div>
                <div className='alg-canvas-container' ref={this.canvasContainerRef}>
                    <Canvas
                         width={this.state.width}
                        height={this.state.height}
                          rref={this.canvasRef}
                          onMouseDrag={this.handleMouseDrag}
                          offset={this.state.offset}
                          onScroll={this.handleScroll}
                          Xmin={this.state.Xmin}
                          Xmax={this.state.Xmax}
                          Ymin={this.state.Ymin}
                          Ymax={this.state.Ymax}
                    />
                </div>
            </div>
        );
    }

    private handleContainerResize(): void {
        this.setWidthHeight();
    }

    private handleFieldChange(latex: string): void {
        console.log('math');
    }

    private handleToolbarButtonClick(ev: React.MouseEvent): void {
        this.setState({
            mathFields: this.state.mathFields + 1
        });
    }

    private handleMouseDrag(ev: MouseEvent): void {
        this.setState({
            offset: new Point(this.state.offset.getX() + ev.movementX, this.state.offset.getY() + ev.movementY)
        });
    }

    private handleScroll(deltaY: number): void {
        if (deltaY < 0) {
            this.setState({
                Xmin: this.state.Xmin / 2,
                Xmax: this.state.Xmax / 2,
                Ymin: this.state.Ymin / 2,
                Ymax: this.state.Ymax / 2
            });
        } else {
            this.setState({
                Xmin: this.state.Xmin + 1,
                Xmax: this.state.Xmax + 1,
                Ymin: this.state.Ymin + 1,
                Ymax: this.state.Ymax + 1
            });
        }
    }
}

export default GraphPage;