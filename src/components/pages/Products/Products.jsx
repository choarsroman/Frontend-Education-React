import { useEffect, useRef, useState } from 'react'
import styles from '../../../styles/Products.module.css'
import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import productsData from '../../assets/data.json'
import { CiHeart } from 'react-icons/ci'
import { Provider, useDispatch, useSelector } from 'react-redux'
import {
  addToCartItem,
  addToWishlistItem,
  selectCart,
  selectSearch,
  selectWishlist,
  setSearchQuery,
} from '../../../slices/CartSlice'
import ProductCart from './ProductCart'
const Products = () => {
  const [viewAll, setViewAll] = useState(false)
  const dispatch = useDispatch()
  const wishlist = useSelector(selectWishlist)
  const cart = useSelector(selectCart)
  const searchQuery = useSelector(selectSearch)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const isInWishlist = (el) => wishlist.find((item) => item.id === el.id)
  const isInCart = (el) => cart.find((item) => item.id === el.id)

  const filteredByTitle = productsData.filter((el) =>
    el.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const selectedProducts = viewAll
    ? filteredByTitle
    : filteredByTitle.slice(0, 6)

  const addToWishlist = (item) => {
    if (isInCart(item)) {
      alert(`${item.name} буде видалено з корзини`)
      dispatch(addToWishlistItem(item))
    } else {
      dispatch(addToWishlistItem(item))
    }
  }

  const addToCart = (item) => {
    if (isInWishlist(item)) {
      alert(`${item.name} буде видалено з вішлиста`)
      dispatch(addToCartItem(item))
    } else {
      dispatch(addToCartItem({ ...item, quantity: 1 }))
    }
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
            ref={inputRef}
            className={styles.input}
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
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
              <ProductCart item={el} />
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
