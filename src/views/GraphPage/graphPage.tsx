import * as React from 'react';

import Canvas       from '../../components/canvas';
import Toolbar from '../../components/toolbar';
import Page         from '../../components/Page';

import './GraphPage.scss';

class GraphPage extends React.Component {

    canvasRef: React.RefObject<HTMLCanvasElement>;

    constructor(props: any) {
        super(props);
        this.canvasRef = React.createRef<HTMLCanvasElement>();
        this.state = {
            gWidth: 0,
            gHeight: 0
        };
    }

    private getCanvas(): HTMLCanvasElement {
        return this.canvasRef.current;
    }

    private getWidth(): number {
        return (this.getCanvas() == null) ? 0 : this.getCanvas().width;
    }

    private getHeight(): number {
        return (this.getCanvas() == null) ? 0 : this.getCanvas().height;
    }

    // public componentDidMount(): void {
    //     this.setState({
    //         gWidth: 
    //     });
    // }

    public render(): JSX.Element {
        return (
            <Page idName='alg-graph-view'>
                <Canvas width={0} height={0} rref={this.canvasRef} />
                <Toolbar width={this.getWidth()} height={this.getHeight()}></Toolbar>
            </Page>
        );
    }
}

export default GraphPage;