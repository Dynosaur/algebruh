import React, { FC } from 'react';
import classnames from 'classnames';
import Navbar from '../Navbar';
import './page-style';

interface PageProps {
    navbar?: boolean;
    pageClass?: string;
}

const Page: FC<PageProps> = (props) => {
    const smartClassName = classnames('alg-page', props.pageClass);
    const navbar = (props.navbar) ? <Navbar /> : null;
        return(
            <div className={smartClassName}>
                {navbar}
                {props.children}
            </div>
        );
}

export default Page;