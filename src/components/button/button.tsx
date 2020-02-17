import React, { FC } from 'react';
import './button-style';

interface ButtonProps {
    text?: string;
    onClick?: (ev: React.MouseEvent) => void;
}

const Button: FC<ButtonProps> = (props) => {
    return(
        <div className='alg-button' onClick={props.onClick}>
            {(props.text) ? props.text : '+'}
        </div>
    );
}

export default Button;