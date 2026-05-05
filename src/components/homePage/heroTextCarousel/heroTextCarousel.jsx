'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroTextCarousel () {

const words = ['inspire', 'thrive', 'surprise'];
const interval = 4000;

const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
                const timer = setInterval(() => {
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                        }, interval);
                return () => {clearInterval(timer)}
                }, [words.length, interval]
                )

        return (
                <div className="flex flex-row gap-1">
                        <p>create products that </p>                  
                                <span className="font-bold transition transition-opacity ease-in-out duration-100 overflow-hidden underline underline-offset-4"
                                >{words[currentIndex]}.
                                </span>
                               
                </div>
            )
}

