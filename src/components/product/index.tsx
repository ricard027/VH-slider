import { FunctionComponent } from 'react'

import { Product } from '../../types/product'

import styles from './product.module.css'

import { formatPrice } from '../../utils/formatprice'

const ProductComponent: FunctionComponent<Product> = (product) => {
  const haspromo = product.bestPrice < product.listPrice
  return (
    <div key={product.id} className={styles.slide}>
      <div className={styles.slide_item}>
        <img
          src={product.image}
          alt={`Produto ${product.productName}`}
          title={`produto ${product.productName}`}
        />
      </div>
      <div className={styles.slide_item}>
        {haspromo && (
          <p
            className={styles.promo}
            title={`Produto ${product.productName} está em oferta `}
          >
            OFERTA
          </p>
        )}
        <h2>{product.productName}</h2>
        <div className={styles.item_price}>
          <p>R${formatPrice(product.listPrice)}</p>
          <p>
            R${formatPrice(product.bestPrice)} {product.measurementUnit}
          </p>
        </div>
      </div>
    </div>
  )
}
export default ProductComponent
