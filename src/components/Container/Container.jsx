import React, { Component } from 'react';
import './container.scss';


class Container extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='alg-view-container'>
                {this.props.children}
            </div>
        );
    }

}

export default Container;