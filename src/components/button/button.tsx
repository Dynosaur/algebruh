import * as React from 'react';

import './button-style';

interface ButtonProps {
    children: string;
    onClick?: (ev: React.MouseEvent) => void;
}

const Button = (props: ButtonProps): JSX.Element => {
    return(
        <div className='alg-button' onClick={props.onClick}>{props.children}</div>
    );
}

export default Button;