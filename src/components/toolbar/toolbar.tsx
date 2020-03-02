import React, { FC, KeyboardEvent, useState } from 'react';
import Button from '../button';
import MathField from '../mathfield';
import './toolbar-style';

interface ToolbarProps {
    dark: boolean;
}

const Toolbar: FC<ToolbarProps> = (props) => {
    const [quant, setQuant] = useState(1);

    let mathFields: JSX.Element[] = [];
    for (let i = 0; i < quant - 1; i++) {
        mathFields.push(
            <MathField key={i} />
        );
    }
    mathFields.push(
        <MathField key={quant - 1} />
    );

    return(
        <div className={(props.dark) ? 'alg-toolbar dark-mode' : 'alg-toolbar'}>
            {mathFields}
            <Button onClick={() => setQuant(quant + 1)} />
        </div>
    );
}

export default Toolbar;