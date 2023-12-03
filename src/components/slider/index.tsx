import { useState } from 'react'

import styles from './slider.module.css'

import CustomButton from '../button'

const SliderComponent = () => {
  const slides = [
    { id: 1, title: 'Slide 1', content: 'Conteúdo do Slide 1' },
    { id: 2, title: 'Slide 2', content: 'Conteúdo do Slide 2' },
    { id: 3, title: 'Slide 3', content: 'Conteúdo do Slide 3' }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length
    setCurrentSlide(nextSlide)
  }

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length
    setCurrentSlide(prevSlide)
  }

  return (
    <section className={styles.slider_container}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
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
