"use client"

import React, {useState, useEffect, useRef, useCallback} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import { mealData } from '@/app/data/data'

function FoodSlider () {

const [currentIndex, setCurrentIndex] = useState(0)
const timerRef = useRef(null);

 const mainCourseImages = mealData
    .filter((item) => item.category === 'main courses')
    .map((meal) => meal.image);

const nextSlider = useCallback(() => {
    const isLastSlider = currentIndex === mainCourseImages.length - 1
    const newIndex = isLastSlider ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, mainCourseImages.length])

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
  const newIndex = isFirstSlide ? mainCourseImages.length - 1 : currentIndex - 1
  setCurrentIndex(newIndex)
  resetTimer()
}

const moveToNextSlide = (slideIndex : number) => {
  setCurrentIndex(slideIndex)
}

  return (
    <div className='w-full h-60 md:h-[28rem]  relative group over'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-1000 transition-all ease-in-out'
      style={{backgroundImage: `url(/img${mainCourseImages[currentIndex]})`}}
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700'>
        <BsChevronCompactLeft onClick={prevSlider}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700'>
        <BsChevronCompactRight onClick={nextSlider}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {
          mainCourseImages.map((sliderItem, index) => (
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