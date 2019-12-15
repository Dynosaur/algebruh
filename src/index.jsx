import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import Home from './components/Home.jsx';

const frontEndRouter = (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(frontEndRouter, document.getElementById('root'));