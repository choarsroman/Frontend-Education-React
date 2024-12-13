import styles from '../../styles/Header.module.css'
import { IoSearch, IoCartOutline } from 'react-icons/io5'
import { CiHeart, CiUser } from 'react-icons/ci'
import { Link } from 'react-router'

const Header = () => {
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
        <a href="/">
          <CiHeart className={styles.favourites} />
        </a>
        <a href="/">
          <IoCartOutline className={styles.cart} />
        </a>

        <a href="/">
          <CiUser className={styles.user} />
        </a>
      </div>
    </div>
  )
}

export default Header
