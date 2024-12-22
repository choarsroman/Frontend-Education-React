import { useSelector } from 'react-redux'
import styles from '../../../styles/Cart.module.css'
import { selectCart } from '../../../slices/CartSlice'

const CartTotal = (el) => {
  const cart = useSelector(selectCart)
  const subtotal = cart.reduce((acc, b) => acc + b.price * b.quantity, 0)
  return (
    <>
      <h1>Cart Total</h1>
      <div className={styles.subtotal}>
        <p>Subtotal: </p>
        <p className={styles.totalPrice}>${subtotal}</p>
      </div>
      <div className={styles.shipping}>
        <p>Shipping:</p>
        <p className={styles.totalPrice}>Free</p>
      </div>
      <div className={styles.totalCheckout}>
        <p>Total: </p>
        <p className={styles.totalPrice}>${subtotal}</p>
      </div>
      <div className={styles.process}>
        <button className={styles.totalBtn}>Procees to checkout</button>
      </div>
    </>
  )
}

export default CartTotal
