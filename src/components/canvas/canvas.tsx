import React, { RefObject, useEffect, useRef, useState } from 'react';
import Draw from './draw';
import './canvas-style';

const Canvas = (props) => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);

    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const offsetRef = useRef(offset);

    const matchViewSize = () => {
        const canvasDOM = canvasRef.current;
        const dimensions = canvasDOM.getBoundingClientRect();
        canvasDOM.width = dimensions.width;
        canvasDOM.height = dimensions.height;
    };

    const draw = () => {
        const offsetNow = offsetRef.current;
        const draw = new Draw(canvasRef.current, offsetNow.x, offsetNow.y, 5);
        draw.reticle();
    };

    const handleResize = () => {
        matchViewSize();
        draw();
    };

    const handleMouseDown = () => {
        const handleMouseDrag = (event: MouseEvent) => {
            const currentOffset = offsetRef.current;
            const pixelModifier = 1 / window.devicePixelRatio;
            console.log(pixelModifier);
            setOffset({
                x: currentOffset.x + event.movementX * pixelModifier,
                y: currentOffset.y + event.movementY * pixelModifier
            });
            draw();
        };
        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseDrag);
            window.removeEventListener('mouseup', handleMouseUp);
        };
        window.addEventListener('mousemove', handleMouseDrag);
        window.addEventListener('mouseup', handleMouseUp);
    };

    useEffect(() => {
        matchViewSize();
        draw();

        window.addEventListener('resize', handleResize);

        const canvasDOM = canvasRef.current;
        canvasDOM.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvasDOM.removeEventListener('mousedown', handleMouseDown);
        }
    }, []);

    useEffect(() => {
        offsetRef.current = offset;
    }, [offset]);

    return <canvas className='alg-canvas' ref={ canvasRef } width={ 300 } height={ 300 } />;
};

export default Canvas;
