import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Graph from './components/Graph/';
import './styles/global.scss';

const frontEndRouter = (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/graph' component={Graph} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(frontEndRouter, document.getElementById('root'));