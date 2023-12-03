import { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  )
}

export default CustomButton
