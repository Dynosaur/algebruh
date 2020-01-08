import React, { Component } from 'react';

import Page from '../../components/Page';

import './BlankPage.scss';

class BlankPage extends Component {

    render() {
        return (
            <Page idName='alg-blank-view'>
                Hello, World!
            </Page>
        );
    }
}

export default BlankPage;