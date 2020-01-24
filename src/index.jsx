import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage     from './views/HomePage';
import SignInPage   from './views/SignInPage';
import GraphPage    from './views/GraphPage';
import BlankPage    from './views/BlankPage';
import NotFoundPage from './views/NotFoundPage';

import './global.scss';

const frontEndRouter = (
    <Router>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/sign-in' component={SignInPage} />
            <Route exact path='/graph' component={GraphPage} />
            <Route exact path='/blank' component={BlankPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

ReactDOM.render(frontEndRouter, document.getElementById('root'));