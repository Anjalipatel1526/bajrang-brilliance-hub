import { useRef, useEffect, useState } from 'react';
import * as math from 'mathjs';

interface GradualBlurProps {
    target?: 'parent' | string;
    position?: 'bottom' | 'top' | 'left' | 'right';
    height?: string;
    width?: string;
    strength?: number;
    divCount?: number;
    curve?: 'bezier' | 'linear';
    exponential?: boolean;
    opacity?: number;
    className?: string;
}

const GradualBlur = ({
    target = 'parent',
    position = 'bottom',
    height = '6rem',
    width = '100%',
    strength = 2,
    divCount = 5,
    curve = 'bezier',
    exponential = true,
    opacity = 1,
    className = '',
}: GradualBlurProps) => {
    const [layers, setLayers] = useState<number[]>([]);

    useEffect(() => {
        const newLayers = [];
        for (let i = 0; i < divCount; i++) {
            let val = (i + 1) / divCount;
            if (exponential) {
                val = Math.pow(val, 2);
            }
            newLayers.push(val);
        }
        setLayers(newLayers);
    }, [divCount, exponential, curve]);


    const getMaskStyle = (index: number) => {
        let direction = 'to bottom';
        if (position === 'top') direction = 'to top';
        if (position === 'left') direction = 'to left';
        if (position === 'right') direction = 'to right';

        const stopPosition = (index + 1) * (100 / divCount);

        return {
            backdropFilter: `blur(${strength * (index + 1) * 0.5}px)`,
            maskImage: `linear-gradient(${direction}, rgba(0,0,0,0) 0%, rgba(0,0,0,${opacity}) ${stopPosition}%)`,
            WebkitMaskImage: `linear-gradient(${direction}, rgba(0,0,0,0) 0%, rgba(0,0,0,${opacity}) ${stopPosition}%)`,
            zIndex: index + 1
        };
    };

    return (
        <div
            className={`absolute pointer-events-none ${className}`}
            style={{
                ...(target === 'parent' ? { inset: 0, height: '100%' } : { height, width }),
                ...(position === 'bottom' ? { bottom: 0, left: 0, right: 0, top: 'auto', height } : {}),
                ...(position === 'top' ? { top: 0, left: 0, right: 0, bottom: 'auto', height } : {}),
                ...(position === 'left' ? { left: 0, top: 0, bottom: 0, right: 'auto', width: height } : {}),
                ...(position === 'right' ? { right: 0, top: 0, bottom: 0, left: 'auto', width: height } : {}),
                overflow: 'hidden'
            }}
        >
            {layers.map((_, i) => (
                <div
                    key={i}
                    className="absolute inset-0 w-full h-full"
                    style={getMaskStyle(i)}
                />
            ))}
        </div>
    );
};

export default GradualBlur;
