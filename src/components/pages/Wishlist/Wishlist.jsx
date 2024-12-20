import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlistItem, selectWishlist } from '../../../slices/CartSlice'
import styles from '../../../styles/Wishlist.module.css'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const wishlist = useSelector(selectWishlist)
  const dispatch = useDispatch()

  const removeFromWishlist = (item) => {
    dispatch(addToWishlistItem(item))
  }

  return (
    <div className={styles.wishlist}>
      <div className={styles.header}>
        <h2 className={styles.title}>Wishlist ({wishlist.length})</h2>
        <Link className={styles.headerBtn} to="/">
          Move All To Bag
        </Link>
      </div>
      {wishlist.length <= 0 ? (
        <h1 className={styles.empty}>Your wishlist is empty</h1>
      ) : (
        <ul className={styles.list}>
          {wishlist.map((el) => (
            <li className={styles.column} key={el.id}>
              <Link>
                <img src={el.image} />
              </Link>
              <span className={styles.name}>{el.name}</span>
              <span className={styles.price}>${el.price}</span>
              <button
                onClick={() => {
                  removeFromWishlist(el)
                }}
                className={styles.btn}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Wishlist
