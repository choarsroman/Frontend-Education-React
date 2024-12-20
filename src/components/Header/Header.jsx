import styles from '../../styles/Header.module.css'
import { IoSearch, IoCartOutline } from 'react-icons/io5'
import { CiHeart, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  addToCartItem,
  selectCart,
  selectWishlist,
} from '../../slices/CartSlice'

const Header = () => {
  const wishlist = useSelector(selectWishlist)
  const cart = useSelector(selectCart)

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Exclusive</div>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <Link to="/" className={styles.listItem}>
            Home
          </Link>
          <a href="/" className={styles.listItem}>
            Contact
          </a>
          <a href="/" className={styles.listItem}>
            About
          </a>
          <a href="/" className={styles.listItem}>
            Sign Up
          </a>
        </ul>
      </nav>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="What are you looking for?"
        />
        <a href="/">
          <IoSearch />
        </a>
      </form>
      <div className={styles.account}>
        <Link to="/wishlist">
          {wishlist.length === 0 ? (
            <CiHeart className={styles.favourites} />
          ) : (
            <FaHeart />
          )}
        </Link>
        <div className={styles.cartWrapper}>
          {cart.length !== 0 && (
            <div className={styles.cartIndicator}>{cart.length}</div>
          )}
          <Link to="/cart">
            <IoCartOutline className={styles.cart} />
          </Link>
        </div>

        <a href="/">
          <CiUser className={styles.user} />
        </a>
      </div>
    </div>
  )
}

export default Header
