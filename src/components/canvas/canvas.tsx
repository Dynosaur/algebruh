import React, { FunctionComponent, RefObject, useEffect, useRef, useState } from 'react';
import Draw from './draw';
import './canvas-style';

const Canvas: FunctionComponent = () => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
    let draw: Draw = null;

    const handleResize = () => {
        const canvasDOM = canvasRef.current;
        const dimensions = canvasDOM.getBoundingClientRect();
        canvasDOM.width = dimensions.width;
        canvasDOM.height = dimensions.height;
    };

    const handleMouseDown = () => {
        const handleMouseDrag = (event: MouseEvent) => {
            const pixelModifier = 1 / window.devicePixelRatio;
            draw.translate(event.movementX * pixelModifier, event.movementY * pixelModifier);
        };
        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseDrag);
            window.removeEventListener('mouseup', handleMouseUp);
        };
        window.addEventListener('mousemove', handleMouseDrag);
        window.addEventListener('mouseup', handleMouseUp);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        const canvasDOM = canvasRef.current;
        draw = new Draw(canvasRef.current);
        canvasDOM.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvasDOM.removeEventListener('mousedown', handleMouseDown);
        }
    }, []);

    return (
        <canvas className='alg-canvas' ref={ canvasRef } width={ 300 } height={ 300 } />
    );
};

export default Canvas;
