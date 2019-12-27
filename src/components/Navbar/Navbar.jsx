import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logoImage from './logo.png';

import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className='alg-navbar-container'>
                <Link to='/'>
                    <img className='alg-navbar-logo-img' src={logoImage} />
                </Link>
                <div className='alg-navbar-link-container'>
                    <Link to='/graph' className='alg-navbar-graph-anchor'>
                        <h6 className='alg-navbar-text'>Graph</h6>
                    </Link>
                    <Link to='/sign-in'>
                        <h6 className='alg-navbar-text'>Sign In</h6>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;