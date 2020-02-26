import React, { createRef, FC, useEffect, useRef, useState } from 'react';
import Canvas  from '../../components/canvas';
import { Coordinate } from '../../components/canvas/canvas';
import Page    from '../../components/page';
import Toolbar from '../../components/toolbar';

import './graph-page-style';

/*
    HTMLElement.style.width = 50% works!!! Use this later to make a draggable resize!!!
*/

interface GraphProps {}

const GraphPage: FC<GraphProps> = (props) => {
    const canvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [xOff, setX] = useState(0);
    const [yOff, setY] = useState(0);

    const handleCanvasMouseDrag = (x: number, y: number) => {
        setX(x);
        console.log(xOff);
    }

    const handleCanvasScroll = (amount: number) => {
        console.log(amount);
    }

    const adapt = () => {
        const canvasDOM = canvasRef.current;
        setWidth(canvasDOM.clientWidth);
        setHeight(canvasDOM.clientHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', adapt);
        adapt();
        return () => {
            window.removeEventListener('resize', adapt)
        }
    }, []);

    return(
        <Page className='alg-graph-page'>
            <Toolbar />
            <Canvas
                width={width}
                height={height}
                reactRef={canvasRef}
                onMouseDrag={handleCanvasMouseDrag}
                onScroll={handleCanvasScroll}
                xOffset={xOff}
                yOffset={yOff} />
        </Page>
    );
}

export default GraphPage;