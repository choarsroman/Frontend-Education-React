import { useState } from 'react'
import styles from '../../../styles/Cart.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  addToCartItem,
  changeCartItemQuantity,
} from '../../../slices/CartSlice'
import { TiDelete } from 'react-icons/ti'

const CartItem = ({ el }) => {
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(addToCartItem(el))
  }
  return (
    <li className={styles.cartItems} key={el.id}>
      <div className={styles.cartWrapper}>
        <TiDelete onClick={removeItem} className={styles.cartIndicator} />
        <Link className={styles.productLink}>
          <img src={el.image} />
        </Link>
      </div>
      <p className={styles.productPrice}>${el.price}</p>
      <input
        className={styles.input}
        type="number"
        value={el.quantity}
        min={1}
        onChange={(e) =>
          dispatch(
            changeCartItemQuantity({ id: el.id, quantity: e.target.value })
          )
        }
      />
      <p className={styles.price}>${el.quantity * el.price}</p>
    </li>
  )
}

export default CartItem
