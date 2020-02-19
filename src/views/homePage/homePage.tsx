import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/page';
import './home-style';

interface HomePageProps {
    dark: boolean;
    onNavbarSwitchToggle?: () => void;
}

const HomePage: FC<HomePageProps> = (props) => {
    const passedClass = (props.dark) ? 'alg-home dark-mode' : 'alg-home';
    return (
        <Page navbar pageClass={passedClass} onNavbarSwitchToggle={props.onNavbarSwitchToggle}>
            <h2 className='alg-home-view-title'>Algebra made easy.</h2>
            <Link to='/graph' className='alg-home-graph-link'>
                <h3>Start Graphing</h3>
            </Link>
        </Page>
    );
}

export default HomePage;