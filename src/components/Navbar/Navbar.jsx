import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import algebruhLogo from '../../../dist/algebruhLogo.png';

import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className='alg-navbar-container'>
                <Link to='/'>
                    <img className='alg-navbar-logo-img' src={algebruhLogo} />
                </Link>
                <Link to='/sign-in'>
                    <h6 className='alg-navbar-sign-in'>Sign In</h6>
                </Link>
            </div>
        );
    }
}

export default Navbar;