'use client'

import React from 'react';
import styles from './scrollingText.module.css';

interface ScrollingTextProps {
    offset: string;
    carouselWords: string[];

}

const ScrollingText = ({offset, carouselWords}: ScrollingTextProps) => {

        return (
            <div className={styles.carouselContainer}>
                <div className={styles.carouselTrack} style={{ transform: `translateX(${offset})`}}>
                    
                    {carouselWords.map((item, index) => (
                        <div key={index} 
                        className={styles.carouselCard}>
                            {item}
                        </div>
                    ))}

                    {carouselWords.map((item, index) => (
                        <div key = {index + carouselWords.length} 
                        className={styles.carouselCard}>
                            {item}
                        </div>
                    ))}


                </div>

            </div>                
            )
        }

export default ScrollingText;