import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Page from '../../components/page';
import './home-style';

interface HomePageProps {
    dark: boolean;
    onNavbarSwitchToggle?: () => void;
}

const HomePage: FunctionComponent<HomePageProps> = (props) => {
    const classNamePage = props.dark ? 'alg-home dark-mode' : 'alg-home';
    const classNameButton = props.dark
        ? 'alg-home-graph-link dark-mode'
        : 'alg-home-graph-link';

    return (
        <Page className={classNamePage}>
            <Navbar
                onSwitchToggle={props.onNavbarSwitchToggle}
                switchInitialState={props.dark}
                dark={props.dark}
            />
            <h2 className='alg-home-view-title'>Algebra made easy.</h2>
            <Link to='/graph' className={classNameButton}>
                <h3>Start Graphing</h3>
            </Link>
        </Page>
    );
};

export default HomePage;