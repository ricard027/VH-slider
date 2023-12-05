import { FunctionComponent } from 'react'

import styles from './slider_item.module.css'

interface ISliderProps {
  alt: string
  url: string
  link: string
}

const SliderItem: FunctionComponent<ISliderProps> = ({ alt, url, link }) => {
  return (
    <section className={styles.slide}>
      <a
        href={link}
        title='clique na imagem pra ser ser direcionado pra página.'
      >
        <img src={url} alt={alt} />
      </a>
    </section>
  )
}
export default SliderItem
