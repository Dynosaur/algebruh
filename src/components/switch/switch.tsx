import React, { FunctionComponent, useState } from 'react';
import './switch-style';

interface SwitchProps {
    enabled?: boolean;
    onToggle?: () => void;
}

const Switch: FunctionComponent<SwitchProps> = props => {
    const [toggled, setToggle] = useState(props.enabled ? props.enabled : false);

    const handleClick = (): void => {
        setToggle(!toggled);
        if (props.onToggle) {
            props.onToggle();
        }
    };

    const inputClass = 'alg-switch ' + (toggled ? 'enabled' : 'disabled');

    return (
        <div className={inputClass} onClick={handleClick}>
            <div className='alg-switch-thumb' />
        </div>
    );
};

export default Switch;