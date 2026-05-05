'use client'

import React from 'react';
import { useTransform, motion, MotionValue } from 'framer-motion';

interface RevealSVGProps {
    progress: MotionValue<number>; // Assuming progress is a number
    svgImgURL: string; // Assuming this is the text to display
}
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i : any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

const RevealSVG: React.FC<RevealSVGProps> = (props) => {

    
    const translateY = useTransform(props.progress, [0,1], [150, -150]);

        return (
            <motion.div style={{y: translateY}} className="relative transition-transform duration-300 flex whitespace-nowrap">
                {props.svgImgURL}

                <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
    <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />


    </motion.svg>
            </motion.div>

            )
        }

export default RevealSVG;