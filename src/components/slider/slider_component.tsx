import styles from './slider.module.css'

import useCarousel from '../../hook/scroll'

import CustomButton from '../button'
import SliderItem from './slider_item'

import slides from '../../../data/data.json'

const SliderComponent = () => {
  const { currentSlide, goToNextSlide, goToPrevSlide, goToSlide } = useCarousel(
    { slides: slides || [] }
  )
  return (
    <section className={styles.slider_container}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map(({ url, alt, link }) => (
          <SliderItem url={url} alt={alt} link={link} key={link} />
        ))}
      </div>

      <CustomButton style={{ left: '1rem' }} onClick={goToPrevSlide}>
        <span className='material-symbols-outlined'>arrow_back_ios</span>
      </CustomButton>
      <CustomButton style={{ right: '1rem' }} onClick={goToNextSlide}>
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
