import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styles from '../../styles/Sales.module.css'
const Sales = () => {
  return (
    <div className={styles.sales}>
      <div className={styles.info}>
        <div className={styles.descr}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <div className={styles.link}>
          <Link>Shop now</Link>
        </div>
      </div>
      <div className={styles.language}>
        <div className={styles.text}>English</div>
        <div>
          <IoIosArrowDown className={styles.icon} />
        </div>
      </div>
    </div>
  )
}

export default Sales
