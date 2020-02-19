import React, { FC, useState } from 'react';
import './switch-style';

interface SwitchProps {
    onToggle?: () => void;
}

const Switch: FC<SwitchProps> = (props) => {

    const [toggled, setToggle] = useState(false);

    const handleClick = (): void => {
        setToggle(!toggled);
        if (props.onToggle) {
            props.onToggle();
        }
    }

    const inputClass = 'alg-switch ' + ((toggled) ? 'enabled' : 'disabled');

    return(
        <div className={inputClass} onClick={handleClick}>
            <div className='alg-switch-thumb' />
        </div>
    );
}

export default Switch;