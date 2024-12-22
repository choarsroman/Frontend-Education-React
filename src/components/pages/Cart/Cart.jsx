import { useSelector } from 'react-redux'
import styles from '../../../styles/Cart.module.css'
import { selectCart } from '../../../slices/CartSlice'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

const Cart = () => {
  const infoList = ['Product', 'Price', 'Quantity', 'Subtotal']
  const [coupon, setCoupon] = useState('')
  const cart = useSelector(selectCart)

  const applyCoupon = (e) => {
    e.preventDefault()
    setCoupon('')
  }

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <Link to="/">
          <p className={styles.notActive}>Home /</p>
        </Link>
        <Link>
          <p className={styles.activeLink}>Cart</p>
        </Link>
      </div>
      <ul className={styles.infoList}>
        {infoList.map((el, i) => (
          <li key={i} className={styles.infoItems}>
            <p>{el}</p>
          </li>
        ))}
      </ul>
      {cart.length === 0 ? (
        <p className={styles.cartEmpty}>Your cart is empty</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((el) => (
            <CartItem key={el.id} el={el} />
          ))}
        </ul>
      )}

      <div className={styles.btnRoutes}>
        <Link className={styles.link} to="/">
          Return to shop
        </Link>
        <button className={styles.updateBtn}>Update Cart</button>
      </div>
      <div className={styles.checkout}>
        <div>
          <form className={styles.form}>
            <input
              className={styles.inp}
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button className={styles.formBtn} onClick={applyCoupon}>
              Apply Coupon
            </button>
          </form>
        </div>
        <div className={styles.total}>
          <CartTotal />
        </div>
      </div>
    </div>
  )
}

export default Cart
