import * as React from 'react';

import Button  from '../../components/button';
import Canvas  from '../../components/canvas';
import Toolbar from '../../components/toolbar';

import './graph-page-style';

interface GraphProps {}

interface GraphState {
    width: number;
    height: number;
    mathFields: number;
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
            mathFields: 1
        };

        this.handleContainerResize = this.handleContainerResize.bind(this);
        this.handleToolbarButtonClick = this.handleToolbarButtonClick.bind(this);
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
}

export default GraphPage;