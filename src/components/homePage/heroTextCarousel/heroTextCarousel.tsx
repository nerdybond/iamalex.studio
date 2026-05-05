'use client'

import React, {useState, useEffect} from 'react';


interface HeroTextCarouselProps {
        heroWords: string;
        heroCarouselWords: string[];
      }

const HeroTextCarousel: React.FC<HeroTextCarouselProps> = ({
  heroWords, 
  heroCarouselWords = ['inspire', 'thrive', 'surprise'],
}) => {

const interval = 4000;
const [currentIndex, setCurrentIndex] = useState(0);
const [isFading, setIsFading] = useState(false);

  useEffect(() => {
      if (heroCarouselWords.length === 0) {
        return; // Exit early if there are no words
    }
    const timer = setInterval(() => {
      setIsFading(true); // Start fading out
      setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % heroCarouselWords.length);
                setIsFading(false); // Start fading in
                        }, 800);}, interval);

    return () => {
      clearInterval(timer);
    };
  }, [heroCarouselWords.length, interval]);


        return (
                <div className="text-wrap text-center">
                        <p className='inline mr-1'>{heroWords}</p>
                        {heroCarouselWords.length > 0 && ( // Only render if there are words
                          <p className={`inline-flex font-bold underline underline-offset-4 transition-opacity duration-800 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
                            ${ isFading ? 'opacity-0' : 'opacity-100'}`}
                          >
                                {heroCarouselWords[currentIndex]}.
                          </p> 
                        )}
                </div>
            )
}

export default HeroTextCarousel;