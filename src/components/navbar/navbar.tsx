import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logo.png';
import Switch from '../switch';
import './navbar-style';

interface NavbarProps {
    dark: boolean;
    switchInitialState?: boolean;
    onSwitchToggle?: () => void;
}

const Navbar: FC<NavbarProps> = (props) => {
    const classNameNavbar = (props.dark) ? 'alg-navbar dark-mode' : 'alg-navbar';
    
    return (
        <div className={classNameNavbar}>
            <Link to='/' className='alg-navbar-logo-link'>
                <img className='alg-navbar-logo-img' src={logoImage} />
            </Link>
            <div className='alg-navbar-aux'>
                <Switch onToggle={props.onSwitchToggle} enabled={props.switchInitialState} />
                <Link to='/graph' className='alg-navbar-graph-link'>
                    <h6>Graph</h6>
                </Link>
                <Link to='/sign-in' className='alg-navbar-sign-in-link'>
                    <h6>Sign In</h6>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;