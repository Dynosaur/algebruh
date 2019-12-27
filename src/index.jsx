import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './views/HomePage';
import SignIn from './components/sign-in/';
import GraphPage from './views/GraphPage';
import BlankPage from './views/BlankPage';
import NotFound from './components/NotFound';

import './global.scss';

const frontEndRouter = (
    <Router>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/graph' component={GraphPage} />
            <Route exact path='/blank' component={BlankPage} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(frontEndRouter, document.getElementById('root'));