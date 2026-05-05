'use client'

import React from 'react';
import { useTransform, motion, MotionValue } from 'framer-motion';

interface SlidingSubtitleTextProps {
    progress: MotionValue<number>; // Assuming progress is a number
    // freeSpaceText: string; // Assuming this is the text to display
}

const SlidingSubtitleText: React.FC<SlidingSubtitleTextProps> = (props) => {
    
    const translateX = useTransform(props.progress, [0,1], [-250, 350]);

        return (
            <motion.div style={{x: translateX}} className="relative transition-transform duration-300 flex whitespace-nowrap">
                <div className='flex flex-col gap-2 w-[70%] text-sm text-wrap'>
                    <p>Giving back is not just our philosophy. It is what we do!</p>
                    <p>Jump into the free collection of designs, stickers, and many more!</p>
                </div>
            </motion.div>

            )
        }

export default SlidingSubtitleText;