import { IoCartOutline, IoCart } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCart, selectWishlist } from '../../../slices/CartSlice'
import { CiHeart } from 'react-icons/ci'
import { TiHeart } from 'react-icons/ti'
import styles from '../../../styles/Products.module.css'

const ProductCart = ({ item }) => {
  const cart = useSelector(selectCart)
  const wishlist = useSelector(selectWishlist)
  return (
    <Link className={styles.cart} to="/cart">
      {cart.find((el) => el.id === item.id) ? (
        <IoCart className={styles.cartIcon} />
      ) : (
        <IoCartOutline className={styles.cartIcon} />
      )}
      {wishlist.find((el) => el.id === item.id) ? (
        <TiHeart className={styles.wishlistIcon} />
      ) : (
        <CiHeart className={styles.wishlistIcon} />
      )}
    </Link>
  )
}

export default ProductCart
