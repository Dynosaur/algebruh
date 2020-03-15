import React, { FC, useEffect, useRef, useState } from 'react';
import Draw from './draw';
import './canvas-style';

/*

    ISSUES
    ------

    1. Strange effect when inspect menu is open:
        - Mouse movement seems slowed, as if it was not tracking the correct amount of movement
        - Does not occur when inspect menu is closed (When running application as intended)
        - Does not occur when window size is changed

*/

interface CanvasProps {
    dark: boolean;
}

const Canvas: FC<CanvasProps> = (props) => {
    const canvas = useRef(null);

    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const offsetRef = useRef(offset);

    const [zoom, setZoom] = useState(5);
    const zoomRef = useRef(zoom);

    useEffect(() => {
        const canvasDOM: HTMLCanvasElement = canvas.current;
        const handleWindowResize = () => {
            const size = canvasDOM.getBoundingClientRect();
            setDimension({
                width: size.width,
                height: size.height
            });
        };
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        const handleWheel = (event: MouseWheelEvent) => {
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
        canvasDOM.addEventListener('wheel', handleWheel, { passive: true });

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
            const offsetCurrent = offsetRef.current;
            const deviceZoomFactor = 1 / window.devicePixelRatio;
            setOffset({
                x: offsetCurrent.x + (event.movementX * deviceZoomFactor),
                y: offsetCurrent.y + (event.movementY * deviceZoomFactor)
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

        const draw = new Draw(canvasDOM, offset.x, offset.y, zoom);
        draw.grid();
        //draw.draw();

        return () => {
            canvasDOM.removeEventListener('mousedown', handleMouseDown);
        };
    }, [dimension, offset, zoom]);

    return (
        <canvas
            className={(props.dark) ? 'alg-canvas dark-mode' : 'alg-canvas'}
            width={dimension.width}
            height={dimension.height}
            ref={canvas} />
    );
}

export default Canvas;