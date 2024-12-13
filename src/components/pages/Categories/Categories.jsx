import styles from '../../../styles/Categories.module.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categories = [
    'Одяг',
    'Взуття',
    'Меблі',
    'Книги',
    'Побутова техніка',
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
