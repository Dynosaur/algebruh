import React, { FC } from 'react';
import Navbar from '../Navbar';
import './page-style';

interface PageProps {
    className?: string;
}

const Page: FC<PageProps> = (props) => {
    return (
        <div className={(props.className) ? 'alg-page ' + props.className : 'alg-page'}>
            {props.children}
        </div>
    );
}

export default Page;