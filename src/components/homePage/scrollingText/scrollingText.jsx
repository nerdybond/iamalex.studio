'use client'

import React from 'react';

const carouselWords = ['Design', 'Development', 'Prototypes', 'Product Design'];

const ScrollingText = () => {

        return (
            <div className='relative h-[100%] w-[100%] py-2 text-black bg-[#7A7A7A] overflow-hidden'>
                <div className='flex whitespace-nowrap animate-scroll-x'>
                    
                    {carouselWords.map((item, index) => (
                        <div key={index} 
                        className='flex-none cursor-default bg-white uppercase my-2 px-4 py-2 text-center border-r-4 border-black'>
                            {item}
                        </div>
                    ))}

                    {carouselWords.map((item, index) => (
                        <div key = {index + carouselWords.length} 
                        className='flex-none cursor-default bg-white uppercase my-2 px-4 py-2 text-center border-r-4 border-black'>
                            {item}
                        </div>
                    ))}

                    {carouselWords.map((item, index) => (
                        <div key = {index + carouselWords.length} 
                        className='flex-none cursor-default bg-white uppercase my-2 px-4 py-2 text-center border-r-4 border-black'>
                            {item}
                        </div>
                    ))}

                </div>

            </div>                
            )
        }

export default ScrollingText;