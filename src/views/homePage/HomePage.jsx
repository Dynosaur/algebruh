import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Page   from '../../components/Page';

import './HomePage';

class HomePage extends Component {
    render() {
        return (
            <Page idName='alg-home-view' navbar>
                <h2 className='alg-home-view-title'>Algebra made easy.</h2>
                <Link to='/graph' className='alg-home-graph-link'>
                    <h3>Start Graphing</h3>
                </Link>
            </Page>
        );
    }
}

export default HomePage;