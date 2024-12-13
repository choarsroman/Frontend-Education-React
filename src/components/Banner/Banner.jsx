import BANNER from '../../images/Frame 560.png'
import styles from '../../styles/Banner.module.css'

const Banner = ({ title }) => {
  return (
    <div className={styles.banner}>
      <img className={styles.img} src={BANNER} />
      <p>{title}</p>
    </div>
  )
}

export default Banner
