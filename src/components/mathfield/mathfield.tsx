import React, { createRef, KeyboardEvent, SFC, useEffect, RefObject, useRef, useState } from 'react';
import { useKeyPress } from '../../util/events';
import './mathfield-style';

interface MathFieldProps { }

const MathField: SFC<MathFieldProps> = (props) => {

    const textAreaRef = createRef<HTMLTextAreaElement>();
    const svgRef = createRef<SVGSVGElement>();

    const [svgWidth, setSVGWidth] = useState(0);
    const [svgHeight, setSVGHeight] = useState(0);

    const handleFocus = () => {
        console.log('Hi');
    }

    const handleBlur = () => {
        console.log('Blur');
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(textAreaRef.current);
            setSVGWidth(textAreaRef.current.clientWidth);
            setSVGHeight(textAreaRef.current.clientHeight);
        });
    });

    return (
        <div className='alg-mathfield' >
            <textarea className='alg-mathbox' ref={ textAreaRef } onFocus={ handleFocus } onBlur={ handleBlur } />
            <svg className='alg-svg-output' ref={ svgRef } width={ svgWidth } height={ svgHeight }></svg>
        </div>
    );
}

export default MathField;