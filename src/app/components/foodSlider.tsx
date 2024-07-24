"use client"

import React, {useState, useEffect, useRef, useCallback} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const FoodSlider = () => {

const [currentIndex, setCurrentIndex] = useState(0)
const timerRef = useRef(null);

const sliders = [
  {
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1642672076/NetflixApp/burger_emxbtv.jpg'
  },
{
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
  }, 
{
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1642672612/NetflixApp/ric_a4ewxo.jpg'
  }
]

const nextSlider = useCallback(() => {
    const isLastSlider = currentIndex === sliders.length - 1
    const newIndex = isLastSlider ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, sliders.length])

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(nextSlider, 3500)
  }, [nextSlider])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [currentIndex, resetTimer])


const prevSlider = () => {
  const isFirstSlide = currentIndex === 0
  const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
  setCurrentIndex(newIndex)
  resetTimer()
}

const moveToNextSlide = (slideIndex : number) => {
  setCurrentIndex(slideIndex)
}

  return (
    <div className='w-full h-60 md:h-96 py-4 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-1000 transition-all ease-in-out'
      style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-orange-700'>
        <BsChevronCompactLeft onClick={prevSlider}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-orange-700'>
        <BsChevronCompactRight onClick={nextSlider}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {
          sliders.map((sliderItem, index) => (
          <div 
          key={index}
          onClick={()=>moveToNextSlide(index)}
          className={`text-2xl cursor-pointer ${currentIndex === index ? "opacity-100" : "opacity-70"} transition-all duration-1000 ease-in-out` }
          >
              <RxDotFilled />
          </div>
          ))
        }
      
      </div>
    </div>
  )
}

export default FoodSlider;