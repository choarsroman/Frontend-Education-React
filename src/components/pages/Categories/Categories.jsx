import { Link } from 'react-router-dom'
import styles from '../../../styles/Categories.module.css'

const Categories = () => {
  const categories = [
    'Книги',
    'Побутова техніка',
    'Взуття',
    'Аксесуари',
    'Меблі',
    'Посуд',
  ]
  return (
    <div className={styles.categories}>
      <div className={styles.before}>
        <span className={styles.label}>Categories</span>
      </div>
      <div className={styles.browse}>Browse By Category</div>
      <ul className={styles.list}>
        {categories.map((el, i) => {
          return (
            <Link className={styles.link} key={i}>
              {el}
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
