import { useState } from 'react'
import styles from '../../../styles/Products.module.css'
import { Link } from 'react-router'
import { IoSearch } from 'react-icons/io5'
import { products } from '../../../data/data'
import NewArrival from '../NewArrival/NewArrival'
const Products = () => {
  const [viewAll, setViewAll] = useState(false)

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
        {products.map((el) => {
          return (
            <li key={el.id} className={styles.columns}>
              <Link>
                <img src={el.image} />
              </Link>
              <span>{el.name}</span>
              <span>${el.price}</span>
            </li>
          )
        })}
      </ul>
      {viewAll && <NewArrival />}
      <div className={styles.btnCenter}>
        <button className={styles.button} onClick={handleToggleBtn}>
          View {viewAll ? `All` : `Less`} Products
        </button>
      </div>
    </div>
  )
}

export default Products
