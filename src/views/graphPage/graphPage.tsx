import React from 'react';
import Canvas  from '../../components/canvas';
import { Coordinate } from '../../components/canvas/canvas';
import Page    from '../../components/page';
import Toolbar from '../../components/toolbar';

import './graph-page-style';

interface GraphProps {}

interface GraphState {
    mathFields: number;
    canvasWidth: number;
    canvasHeight: number;
    canvasCenter: Coordinate;
    canvasXRange: number;
    canvasYRange: number;
}

interface Graph2Props {}

const GraphPage2: React.SFC<Graph2Props> = (props) => {
    return(
        <Page pageClass='alg-graph-page'>
            <Toolbar />
            <Canvas />
        </Page>
    );
}

export default GraphPage2;