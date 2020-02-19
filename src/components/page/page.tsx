import React, { FC } from 'react';
import Navbar from '../Navbar';
import './page-style';

interface PageProps {
    navbar?: boolean;
    pageClass?: string;
    onNavbarSwitchToggle?: () => void;
}

const Page: FC<PageProps> = (props) => {
    const smartClassName = (props.pageClass) ? 'alg-page ' + props.pageClass : 'alg-page';
    const navbar = (props.navbar) ? <Navbar onSwitchToggle={props.onNavbarSwitchToggle} /> : null;
        return(
            <div className={smartClassName}>
                {navbar}
                {props.children}
            </div>
        );
}

export default Page;