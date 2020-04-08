import React, { FunctionComponent, useState } from 'react';
import Canvas from '../../components/canvas';
import Page from '../../components/page';
import './graph-page-style';

/*
    HTMLElement.style.width = 50% works!!! Use this later to make a draggable resize!!!
*/

interface GraphProps {
    dark: boolean;
}

const GraphPage: FunctionComponent<GraphProps> = (props) => {
    return (
        <Page className='alg-graph-page'>
            {/*<Toolbar dark={props.dark} />*/}
            <Canvas dark={props.dark} />
        </Page>
    );
};

export default GraphPage;
