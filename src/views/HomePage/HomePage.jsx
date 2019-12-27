import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';

import './HomePage.scss';

class HomePage extends Component {
    render() {
        return (
            <div className='alg-home-view'>
                <Navbar />
                <h2 className='alg-home-view-title'>Algebra made easy.</h2>
                <Link to='/graph' className='alg-home-graph-link'>
                    <h3>Start Graphing</h3>
                </Link>
            </div>
        );
    }
}

export default HomePage;