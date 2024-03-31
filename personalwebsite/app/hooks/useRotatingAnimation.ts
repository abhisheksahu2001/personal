'use client'
import React, { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'

const useRotatingAnimation = (): [Dispatch<SetStateAction<boolean>>, React.MutableRefObject<HTMLDivElement | null>] => {
    const [hover, setHover] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        if (!hover) return;

        let animationId: number;
        let lastTimestamp;

        const changeAngle = (timestamp) => {
            if (!lastTimestamp) {
                lastTimestamp = timestamp;
            }
            const deltaTime = timestamp - lastTimestamp;

            if (deltaTime > 1000 / 60) {
                if (ref.current) {
                    let styles = window.getComputedStyle(ref.current);
                    let currentAngle = parseFloat(styles.getPropertyValue("--angle"));
                    let angle = (currentAngle + 1) % 360;

                    ref.current.style.setProperty('--angle', angle + 'deg');
                }
                lastTimestamp = timestamp;
            }

            animationId = requestAnimationFrame(changeAngle);
        };

        if (hover) {
            animationId = requestAnimationFrame(changeAngle);
        }


        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [hover, ref]);
    return [setHover, ref]
}

export default useRotatingAnimation;