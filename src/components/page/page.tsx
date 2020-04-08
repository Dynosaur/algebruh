import React, { FunctionComponent } from 'react';
import Navbar from '../Navbar';
import './page-style';

interface PageProps {
    className?: string;
}

const Page: FunctionComponent<PageProps> = props => {
    return (
        <div
            className={props.className ? 'alg-page ' + props.className : 'alg-page'}>
            {props.children}
        </div>
    );
};

export default Page;
