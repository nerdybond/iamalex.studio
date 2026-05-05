'use client'

import React from 'react';
import { useTransform, motion, MotionValue } from 'framer-motion';

interface SlidingTextProps {
    direction: 'left' | 'right'; // Assuming these are the only possible values
    progress: MotionValue<number>; // Assuming progress is a number
    left: string; // Assuming left is a string, change to number if appropriate
    freeSpaceText: string; // Assuming this is the text to display
}

const SlidingText: React.FC<SlidingTextProps> = (props) => {
    const direction = props.direction === 'left' ? -1 : 1;
    
    const translateX = useTransform(props.progress, [0,1], [550 * direction, -550 * direction]);

        return (
            <motion.div style={{x: translateX, left: props.left}} className="relative transition-transform duration-300 flex whitespace-nowrap">
            {props.freeSpaceText}
            </motion.div>

            )
        }

export default SlidingText;