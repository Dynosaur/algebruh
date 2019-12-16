import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import algebruhLogo from '../../../dist/algebruhLogo.png';

import './HomePage.scss';

class HomePage extends Component {
    render() {
        return (
            <div className='alg-home-view'>
                <Navbar />
                <h2 className='alg-home-view-title'>Algebra made easy.</h2>
            </div>
        );
    }
}

export default HomePage;