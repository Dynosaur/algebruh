import React, { Component } from 'react';

import Navbar from '../../components/Navbar';

import './signInPage-style';

class SignInPage extends Component {

    render() {
        return (
            <div className='alg-sign-in-view'>
                <Navbar />
                <h1>Sign In</h1>
            </div>
        );
    }

}

export default SignInPage;