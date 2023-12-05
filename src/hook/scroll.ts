import { useCallback, useEffect, useState } from 'react'

import { CarouselProps, CarouselState } from '../types/carousel'

const useCarousel = ({ slides }: CarouselProps) => {
  const [state, setState] = useState<CarouselState>({
    currentSlide: 0,
    isAutoScrolling: true
  })

  const goToNextSlide = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      currentSlide: (prevState.currentSlide + 1) % slides.length
    }))
  }, [slides])

  useEffect(() => {
    let intervalId: number

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        goToNextSlide()
      }, 5000)
    }

    const stopAutoScroll = () => {
      clearInterval(intervalId)
    }

    if (state.isAutoScrolling) {
      startAutoScroll()
    }

    return () => {
      stopAutoScroll()
    }
  }, [state.isAutoScrolling, goToNextSlide, slides.length])

  const goToSlide = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      isAutoScrolling: false,
      currentSlide: index
    }))
  }

  const goToPrevSlide = () => {
    setState((prevState) => ({
      ...prevState,
      currentSlide: (prevState.currentSlide - 1 + slides.length) % slides.length
    }))
  }

  const toggleAutoScroll = () => {
    setState((prevState) => ({
      ...prevState,
      isAutoScrolling: !prevState.isAutoScrolling
    }))
  }

  return {
    ...state,
    goToSlide,
    goToPrevSlide,
    goToNextSlide,
    toggleAutoScroll
  }
}

export default useCarousel
