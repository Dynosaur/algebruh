import React, { createRef, FC, useEffect, useRef, useState } from 'react';
import Canvas  from '../../components/canvas';
import { Coordinate } from '../../components/canvas/canvas';
import Page    from '../../components/page';
import Toolbar from '../../components/toolbar';

import './graph-page-style';

/*
    HTMLElement.style.width = 50% works!!! Use this later to make a draggable resize!!!
*/

interface GraphProps {
    dark: boolean;
}

const GraphPage: FC<GraphProps> = (props) => {

    return(
        <Page className='alg-graph-page'>
            <Toolbar dark={props.dark} />
            <Canvas dark={props.dark} />
        </Page>
    );
}

export default GraphPage;