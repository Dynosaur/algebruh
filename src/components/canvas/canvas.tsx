import React, { FC, RefObject, useEffect, useRef, useState, WheelEvent } from 'react';
import Draw from './draw';
import './canvas-style';

export interface Coordinate {
    x: number;
    y: number;
}

export interface Line {
    start: Coordinate;
    end: Coordinate;
}

interface CanvasProps {
    dark: boolean;
}

const Canvas: FC<CanvasProps> = (props) => {
    const canvas = useRef(null);

    const [dimension, setDimension] = useState(
        { width: 0, height: 0 }
    );

    const [offset, setOffset] = useState(
        { x: 0, y: 0 }
    );

    const offsetRef = useRef(offset);

    useEffect(() => {
        const handleWindowResize = () => {
            const canvasDOM: HTMLCanvasElement = canvas.current;
            setDimension(
                { width: canvasDOM.clientWidth, height: canvasDOM.clientHeight }
            );
        }
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    useEffect(() => {
        offsetRef.current = offset;
    }, [offset]);

    useEffect(() => {
        const canvasDOM: HTMLCanvasElement = canvas.current;
        const handleMouseDrag = (event: MouseEvent) => {
            setOffset(
            {
                x: offsetRef.current.x + event.movementX,
                y: offsetRef.current.y + event.movementY
            }
            );
        }
        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseDrag);
            window.removeEventListener('mouseup', handleMouseUp);
        }
        const handleMouseDown = () => {
            window.addEventListener('mousemove', handleMouseDrag);
            window.addEventListener('mouseup', handleMouseUp);
        }
        canvasDOM.addEventListener('mousedown', handleMouseDown);

        const draw = new Draw(canvasDOM, offset.x, offset.y);
        draw.clear();
        draw.reticle();

        return () => {
            canvasDOM.removeEventListener('mousedown', handleMouseDown);
        };
    }, [dimension, offset]);

    return(
        <canvas
            className={(props.dark) ? 'alg-canvas dark-mode' : 'alg-canvas'}
            width={dimension.width}
            height={dimension.height}
            ref={canvas} />
    );
}

export default Canvas;