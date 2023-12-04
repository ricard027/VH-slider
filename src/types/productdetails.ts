import { Product } from './product'

export interface IProductDetails extends Product {
  brandImageUrl: string | null
  categories: string[]
  categoryId: string
  items: {
    itemId: string
    name: string
    measurementUnit: string
    unitMultiplier: number
    images: {
      imageUrl: string
      imageText: string
    }[]
  }[]
  link: string
  linkText: string
  productClusters: {
    [clusterId: number]: string
  }
}
