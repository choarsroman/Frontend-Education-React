import { useEffect, useState } from 'react'
import styles from '../../../styles/Products.module.css'
import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { products } from '../../../data/data'
import { CiHeart } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCartItem,
  addToWishlistItem,
  selectCart,
  selectWishlist,
} from '../../../slices/CartSlice'
const Products = () => {
  const [viewAll, setViewAll] = useState(false)

  const selectedProducts = viewAll ? products : products.slice(0, 6)

  const dispatch = useDispatch()
  const wishlist = useSelector(selectWishlist)
  const cart = useSelector(selectCart)

  const isInWishlist = (el) => wishlist.find((item) => item.id === el.id)
  const isInCart = (el) => cart.find((item) => item.id === el.id)

  const addToWishlist = (item) => {
    dispatch(addToWishlistItem(item))
  }

  const addToCart = (item) => {
    dispatch(addToCartItem({ ...item, quantity: 1 }))
  }

  const handleToggleBtn = () => {
    setViewAll(!viewAll)
  }

  return (
    <div className={styles.products}>
      <div className={styles.before}>
        <span className={styles.label}>Our Products</span>
      </div>
      <div className={styles.browse}>Explore our products</div>
      <div className={styles.search}>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="What are you looking for?"
          />
          <Link>
            <IoSearch />
          </Link>
        </form>
      </div>
      <ul className={styles.list}>
        {selectedProducts.map((el) => {
          return (
            <li key={el.id} className={styles.columns}>
              <Link>
                <img src={el.image} />
              </Link>
              <span>{el.name}</span>
              <span>${el.price}</span>
              <div className={styles.btns}>
                <button
                  onClick={() => addToWishlist(el)}
                  className={styles.cartBtn}
                >
                  {isInWishlist(el) ? 'Вже у вішлисті' : 'Додати до вішлиста'}
                </button>
                <button
                  onClick={() => addToCart(el)}
                  className={styles.cartBtn}
                >
                  {isInCart(el) ? 'Вже у кошику' : 'Додати в кошик'}
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <div className={styles.btnCenter}>
        <button className={styles.button} onClick={handleToggleBtn}>
          View {viewAll ? `Less` : `All`} Products
        </button>
      </div>
    </div>
  )
}

export default Products
