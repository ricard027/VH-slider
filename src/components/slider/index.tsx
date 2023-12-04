import { useEffect, useState } from 'react'
import styles from './slider.module.css'
import CustomButton from '../button'
import { Product } from '../../types/product'
import ProductComponent from '../product'

const SliderComponent = () => {
  const [slides, setSlides] = useState<Product[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  const getProductsToSlider = async () => {
    try {
      const res = await fetch('https://desafio.xlow.com.br/search')
      const data: Product[] = await res.json()
      setSlides(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductsToSlider()
  }, [])

  useEffect(() => {
    let intervalId: number

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        goToNextSlide()
      }, 500)
    }

    const stopAutoScroll = () => {
      clearInterval(intervalId)
    }

    if (isAutoScrolling) {
      startAutoScroll()
    }

    return () => {
      stopAutoScroll()
    }
  }, [currentSlide, isAutoScrolling, slides])

  const goToSlide = (index: number) => {
    setIsAutoScrolling(false)
    setCurrentSlide(index)
  }

  const goToNextSlide = () => {
    setIsAutoScrolling(false)
    const nextSlide = (currentSlide + 1) % slides.length
    setCurrentSlide(nextSlide)
  }

  const goToPrevSlide = () => {
    setIsAutoScrolling(false)
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length
    setCurrentSlide(prevSlide)
  }

  return (
    <section
      className={styles.slider_container}
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((product: Product) => (
          <ProductComponent {...product} key={product.productId} />
        ))}
      </div>

      <CustomButton style={{ left: 0 }} onClick={goToPrevSlide}>
        <span className='material-symbols-outlined'>arrow_back_ios</span>
      </CustomButton>
      <CustomButton style={{ right: 0 }} onClick={goToNextSlide}>
        <span className='material-symbols-outlined'>arrow_forward_ios</span>
      </CustomButton>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default SliderComponent
