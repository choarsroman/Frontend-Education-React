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
        {categories.map((el, i) => (
          <li className={styles.item} key={i}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
