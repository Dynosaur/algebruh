import React, {Component} from 'react';

import Navbar from '../Navbar';

import './Page.scss';

class Page extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='alg-page' id={this.props.idName}>
                {this.props.navbar &&
                    <Navbar />
                }
                {this.props.children}
            </div>
        );
    }

}

export default Page;