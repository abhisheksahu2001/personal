import React, { useState } from 'react'

export const useCursorHook = () => {
    const [xy, setXY] = useState({ x: 0, y: 0 });
    const updateCurserCoordinates = (e: any, ref, idx: number) => {
        const containerXYValue = ref.current.getBoundingClientRect();
        let xValue = e.clientX - containerXYValue.left + window.screenX;
        let yValue = (e.clientY - containerXYValue.top - (containerXYValue.height * (idx)));
        setXY({ x: xValue, y: yValue });
    }
    return { xy, updateCurserCoordinates };
}