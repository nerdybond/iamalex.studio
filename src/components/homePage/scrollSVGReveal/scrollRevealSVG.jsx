"use client"
import React, {useRef, useState, useEffect} from 'react';

const ScrollRevealSVG = ({svgURL}) => {
    const canvasRef = useRef(null);
    const canvasContext = useRef(null);
    const pathLength = useRef(0);
    const scrollTriggered = useRef(false);
    const [svgPathData, setSvgPathData] = useState('');

      
    useEffect(() => {
        const fetchSvgData = async () => {
        try {
            const response = await fetch(svgURL);
            const svgText = await response.text();
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
            const pathElements = svgDoc.querySelectorAll('path');

            if (pathElements.length > 0) {
            const pathData = pathElements[0].getAttribute('d');
            setSvgPathData(pathData);

            // Calculate the path length using getTotalLength
            const pathLength = pathElements.getTotalLength();
            pathLength;
            }
        } catch (error) {
                            console.error('Error fetching SVG:', error);
                        }
        };
        fetchSvgData();},
        [svgURL]);


    useEffect (() => {
        if (!svgPathData) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        const drawPath = (offset) => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 2;
          const path = new Path2D(svgPathData);
          ctx.stroke(path);
          ctx.restore();
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY/maxScroll,1);
            const offset = pathLength.current * progress;


            if(progress > 0 && !scrollTriggered.current) {
                scrollTriggered.current = true;
                drawPath(offset);
            }
        };

        window.addEventListener('scroll', handleScroll);

    return () => {
          window.removeEventListener('scroll', handleScroll)
    };
    }, [svgPathData, pathLength]);


    return(
        <canvas ref = {canvasRef}
        width = {600}
        height = {600}
        className="block items-center"
        />
    );
};

export default ScrollRevealSVG;