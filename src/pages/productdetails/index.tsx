import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetailsProduct } from '../../utils/getDetailsProduct'
import { formatColors } from '../../utils/formatColors'

import styles from './productDetails.module.css'

import { IProductDetails } from '../../types/productdetails'

const ProductDetailsPage = () => {
  const navigate = useNavigate()

  const [productDetails, setProductDetails] = useState<IProductDetails>()
  const isEmpty = Object.keys(productDetails ?? {}).length

  const { id } = useParams()
  useEffect(() => {
    if (isEmpty) {
      return
    }

    getDetailsProduct(id as string)
      .then((res) => setProductDetails(res))
      .catch((err) => console.log(err))
  }, [productDetails])

  const arrayImages: string[] = []

  productDetails?.items.map(({ images }) =>
    images.forEach(({ imageUrl }) => arrayImages.push(imageUrl))
  )

  return (
    <main className={styles.container_product}>
      <button className={styles.previous_btn} onClick={() => navigate('/')}>
        <span className='material-symbols-outlined'>arrow_back</span> Voltar
      </button>
      <div className={styles.container_images}>
        <div className={styles.current_image}>
          <img src={arrayImages[0]} alt='imagem atual do produto' />
        </div>
        <div className={styles.images}>
          {productDetails?.items.map(({ images }) =>
            images.map(({ imageUrl, imageText }) => (
              <img
                src={imageUrl}
                alt={imageText}
                style={{ width: `${100 / productDetails.items.length - 10}%` }}
              />
            ))
          )}
        </div>
      </div>
      <div>
        <h1>{productDetails?.productName}</h1>
        <p>Categorias</p>
        <div className={styles.categories}>
          {productDetails?.categories?.map((category) => (
            <p className={styles.category}>{category.replace(/[\/']/g, ' ')}</p>
          ))}
        </div>
        <div>
          <p>Cores disponíveis</p>
          <div className={styles.container_colors}>
            {productDetails?.items.map(({ name }) => (
              <p
                style={{ background: formatColors(name) }}
                className={styles.colors}
              >
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
export default ProductDetailsPage
