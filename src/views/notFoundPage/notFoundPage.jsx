import React, {Component} from 'react';

import Page from '../../components/page';

import './notFoundPage-style';

class NotFoundPage extends Component {

    render() {
        return(
            <Page navbar>
                <div className='alg-not-found-view'>
                    <h1>Sorry!</h1>
                    <h2>The page you were looking for could not be found!</h2>
                </div>
            </Page>
        );
    }

}

export default NotFoundPage;