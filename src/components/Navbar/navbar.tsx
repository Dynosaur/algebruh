import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logo.png';
import Switch from '../switch';
import './navbar-style';

class Navbar extends Component {
    render() {
        return (
            <div className='alg-navbar'>
                <Link to='/' className='alg-navbar-logo-link'>
                    <img className='alg-navbar-logo-img' src={logoImage} />
                </Link>
                <div className='alg-navbar-aux'>
                    <Switch />
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