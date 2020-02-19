import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GraphPage    from './views/graphPage';
import HomePage     from './views/homePage';
import NotFoundPage from './views/NotFoundPage';
import SignInPage   from './views/signinPage';
import './global-style';

interface MainProps {}

const Main: FC<MainProps> = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const home = <HomePage dark={darkMode} onNavbarSwitchToggle={toggleDarkMode} />

    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    {home}
                </Route>
                <Route exact path='/home'>
                    {home}
                </Route>
                <Route exact path='/sign-in'>
                    <SignInPage />
                </Route>
                <Route exact path='/graph'>
                    <GraphPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));