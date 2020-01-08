import React, { Component } from 'react';

import GraphToolBar from '../../components/GraphToolBar';
import Graph        from '../../components/Graph';
import Page         from '../../components/Page';

import './GraphPage.scss';

class GraphPage extends Component {

    render() {
        return (
            <Page idName='alg-graph-view'>
                <Graph />
                <GraphToolBar />
            </Page>
        );
    }
}

export default GraphPage;