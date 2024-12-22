import { newProducts } from '../../../data/data'
import { Link } from 'react-router'
import styles from '../../../styles/NewArrival.module.css'

const NewArrival = () => {
  return (
    <div>
      <ul className={styles.list}>
        {newProducts.map((el) => {
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
    </div>
  )
}

export default NewArrival
