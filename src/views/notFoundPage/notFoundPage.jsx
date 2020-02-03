import React, {Component} from 'react';

import './NotFoundPage';

class NotFoundPage extends Component {

    render() {
        return(
            <div className='alg-not-found-view'>
                <h1>Sorry!</h1>
                <h2>The page you were looking for could not be found!</h2>
            </div>
        );
    }

}

export default NotFoundPage;