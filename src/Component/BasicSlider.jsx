import React, { useState, useEffect } from 'react'
import SliderContent from './SliderContent';
import Arrows from './Arrow';
import { ImageData } from '../Images/ImageData';
const len = ImageData.length - 1;

const BasicSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);
      return () => clearInterval(interval);
    }, [activeIndex]);
  
  return (
    <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImage={ImageData} />
        <Arrows
        prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
    />
    </div>
  )
}

export default BasicSlider