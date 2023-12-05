import { FunctionComponent } from 'react'

import styles from './slider_item.module.css'

interface ISliderProps {
  alt: string
  url: string
  link: string
}

const SliderItem: FunctionComponent<ISliderProps> = ({ alt, url, link }) => {
  const handleRedirect = () => {
    return window.open(link, '_blank')
  }
  return (
    <section className={styles.slide}>
      <div
        onClick={handleRedirect}
        title='clique na imagem pra ser ser direcionado pra página.'
      >
        <img src={url} alt={alt} />
      </div>
    </section>
  )
}
export default SliderItem
