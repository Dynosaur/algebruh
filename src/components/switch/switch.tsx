import React, { FC, useState } from 'react';
import classnames from 'classnames';
import './switch-style';

interface SwitchProps {
    onEnable?: () => void;
    onDisable?: () => void;
}

const Switch: FC<SwitchProps> = (props) => {

    const [toggled, setDarkMode] = useState(false);

    const handleChange = (): void => {
        setDarkMode(!toggled);
    }

    const inputClass = classnames('alg-switch', {'enabled': toggled});

    return(
        <input
            type='range'
            min='0'
            max='1'
            value={+toggled}
            onChange={() => {}}
            onClick={handleChange}
            className={inputClass}
        />
    );
}

export default Switch;