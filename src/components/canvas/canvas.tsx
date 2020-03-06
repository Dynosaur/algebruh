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

    const [dimension, setDimension] = useState({
        width: 0,
        height: 0
    });

    const [offset, setOffset] = useState({
        x: 0,
        y: 0
    });

    const [zoom, setZoom] = useState(5);

    const offsetRef = useRef(offset);
    const zoomRef = useRef(zoom);

    useEffect(() => {
        const canvasDOM: HTMLCanvasElement = canvas.current;
        const handleWindowResize = () => {
            const size = canvas.current.getBoundingClientRect();
            setDimension({
                width: size.width,
                height: size.height
            });
        }
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        const handleWheel = (event: MouseWheelEvent) => {
            console.log(event.offsetX);
            if (event.deltaY > 0) {
                setZoom(zoomRef.current + 1);
                setOffset(
                    { x: offsetRef.current.x - ((canvas.current.width / 2) - event.offsetX), y: offsetRef.current.y - event.offsetY }
                );
            } else {
                setZoom(zoomRef.current - 1);
                setOffset(
                    { x: offsetRef.current.x + event.offsetX, y: offsetRef.current.y + event.offsetY }
                );
            }
        }
        canvasDOM.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            canvasDOM.removeEventListener('wheel', handleWheel);
        }
    }, []);

    useEffect(() => {
        offsetRef.current = offset;
    }, [offset]);

    useEffect(() => {
        zoomRef.current = zoom;
    }, [zoom]);

    useEffect(() => {
        const canvasDOM: HTMLCanvasElement = canvas.current;
        const handleMouseDrag = (event: MouseEvent) => {
            setOffset({
                x: offsetRef.current.x + event.movementX,
                y: offsetRef.current.y + event.movementY
            });
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

        const draw = new Draw(canvasDOM, offset.x, offset.y, zoomRef.current);
        draw.clear();
        draw.grid();
        draw.reticle();

        return () => {
            canvasDOM.removeEventListener('mousedown', handleMouseDown);
        };
    }, [dimension, offset, zoom]);

    return(
        <canvas
            className={(props.dark) ? 'alg-canvas dark-mode' : 'alg-canvas'}
            width={dimension.width}
            height={dimension.height}
            ref={canvas} />
    );
}

export default Canvas;