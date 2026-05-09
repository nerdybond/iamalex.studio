'use client'

import React, { useEffect, useRef } from 'react';
import styles from './textMask.module.css';
import Image from 'next/image';
import Wave from "@/assets/wave.png";

export default function TextMask ({ maskImage, maskPosition }) {
        
        const container = useRef(null);
        const stickyMask = useRef(null);

        const intialMaskSize = .45;
        const targetMaskSize = 130;
        const easing = 0.7;
        let easedScrollProgress = 0;

       

        useEffect (() => {
                const handleScroll = () => {
                        requestAnimationFrame(animate);
                        };        
                window.addEventListener('scroll', handleScroll);
                requestAnimationFrame(animate);
                return () => {
                        window.removeEventListener('scroll', handleScroll);
                        };
                },
        []);

        const animate = () => {
        const maskSizeProgress = targetMaskSize * getScrollProgress();        
        if (stickyMask.current) {
                stickyMask.current.style.maskSize = (intialMaskSize + maskSizeProgress) * 200 + "%";
                stickyMask.current.style.webkitMaskImage = (intialMaskSize + maskSizeProgress) * 200 + "%";
              }
              requestAnimationFrame(animate);
        };

        const getScrollProgress = () => {
        const containerHeight = container.current.getBoundingClientRect().height;
        const scrollableHeight = (containerHeight - window.innerHeight);
            
        let scrollProgress = (window.scrollY / scrollableHeight) - 0.8;
        scrollProgress = Math.min(1, Math.max(0, scrollProgress)); // Clamp between 0 and 1
        
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        
        // console.log(scrollProgress)
        // console.log(delta)
        // console.log(easedScrollProgress)

        return easedScrollProgress;
        
        }
        

        return (
                <main className={styles.main}>
                        <div ref={container} className={styles.container}>
                                <div ref={stickyMask} className={styles.stickyMask}
                                          style={{ maskImage, WebkitMaskImage: maskImage, maskPosition }}>
                                        <video autoPlay
                                        muted 
                                        loop 
                                        playsInline
                                        crossOrigin='anonymous'
                                        preload='auto'
                                        > 
                                                <source src="/video.mp4" type="video/mp4"/>
                                        </video>
                                </div>
                        </div>
                        
                </main>
            )
}

