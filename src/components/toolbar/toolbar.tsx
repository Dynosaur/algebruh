import * as React from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';

import './toolbar-style';

addStyles();

const handleKeyPress = (index: number, ev: KeyboardEvent): void => {
    if (ev.key == 'Enter') {
        handleEnterKey(index, ev);
    }
}

const handleEnterKey = (index: number, ev: KeyboardEvent): void => {
    const next = document.getElementById('alg-math-field-' + (index + 1));
    if (!next) {
        console.log('add new one');
    } else {
        next.focus();
    }
}

type ToolbarProps = {
    width: number;
    height: number;
    fieldNum: number;
    onChange?: (latex: string) => void;
    onKeyPress?: (index: number, ev: KeyboardEvent) => void;
}

const Toolbar = (props: ToolbarProps): JSX.Element => {
    let mathFields: JSX.Element[] = [];
    for (let i = 0; i < props.fieldNum; i++) {
        mathFields.push(
            <EditableMathField
                key={i.toString()}
                id={'alg-math-field-' + i}
                className='alg-math-field'
                onKeyPress={ (ev: KeyboardEvent) => handleKeyPress(i, ev)}
            />
        );
    }
    return(
        <div className='alg-toolbar'>
            {mathFields}
        </div>
    );
}

export default Toolbar;