import React, { useRef, useLayoutEffect } from 'react';

interface AutoFitTextProps {
    text: string;
    className?: string;
    maxLines?: number;
    as?: any;
    minFontSize?: number;
}

export const AutoFitText = ({
    text,
    className = "",
    maxLines = 2,
    as: Component = 'div',
    minFontSize = 10
}: AutoFitTextProps) => {
    const ref = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        const resize = () => {
            // Reset to allow measurement
            element.style.fontSize = '';
            element.style.webkitLineClamp = 'unset';
            element.style.overflow = 'visible';

            let currentSize = parseFloat(window.getComputedStyle(element).fontSize);

            // Helper to get target height based on current line height
            const getTargetHeight = (size: number) => {
                const style = window.getComputedStyle(element);
                // If normal, usually ~1.2, but tracking-tight might affect it. 
                // We trust computed lineHeight if not normal.
                const lh = style.lineHeight === 'normal' ? size * 1.2 : parseFloat(style.lineHeight);
                return lh * maxLines;
            };

            while (currentSize > minFontSize) {
                if (element.scrollHeight <= getTargetHeight(currentSize) + 1) {
                    break;
                }
                currentSize -= 0.5;
                element.style.fontSize = `${currentSize}px`;
            }

            // Restore clamping
            element.style.webkitLineClamp = String(maxLines);
            element.style.overflow = 'hidden';
        };

        // Initial resize
        resize();

        // Resize on window resize
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [text, maxLines, minFontSize]);

    return (
        <Component
            ref={ref}
            className={`${className}`}
            style={{
                display: '-webkit-box',
                WebkitLineClamp: maxLines,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                wordBreak: 'break-word'
            }}
        >
            {text}
        </Component>
    );
};
