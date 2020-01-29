import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GraphPage    from './views/graphPage';
import HomePage     from './views/homePage';
import NotFoundPage from './views/NotFoundPage';
import SignInPage   from './views/signinPage';

import './global.scss';

const frontEndRouter = (
    <Router>
        <Switch>
            <Route exact path='/'        component={ HomePage     } />
            <Route exact path='/home'    component={ HomePage     } />
            <Route exact path='/sign-in' component={ SignInPage   } />
            <Route exact path='/graph'   component={ GraphPage    } />
            <Route                       component={ NotFoundPage } />
        </Switch>
    </Router>
);

ReactDOM.render(frontEndRouter, document.getElementById('root'));