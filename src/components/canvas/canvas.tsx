import * as React from 'react';

import './canvas-style';

interface CanvasProps {
    width: number,
    height: number,
    rref: React.RefObject<HTMLCanvasElement>
}

interface CanvasState {
    width: number,
    height: number,
}

class Canvas extends React.Component<CanvasProps, CanvasState> {

    private ref: React.RefObject<HTMLCanvasElement>;

    constructor(props: CanvasProps) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height
        }
        this.ref = props.rref;
    }

    public render(): JSX.Element {
        return(
            <canvas
                className='alg-canvas'
                ref={this.ref}
                width={this.state.width}
                height={this.state.height}>
            </canvas>
        );
    }
}

export default Canvas;