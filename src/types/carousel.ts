export interface CarouselProps {
  slides: {
    url: string
    alt: string
    link: string
  }[]
}

export interface CarouselState {
  currentSlide: number
  isAutoScrolling: boolean
}
