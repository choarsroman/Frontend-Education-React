import TELEGA from '../../images/Vector.png'
import styles from '../../styles/Footer.module.css'
import { Link } from 'react-router'
import QR from '../../images/Qrcode 1.png'
import GP from '../../images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
import APPSTORE from '../../images/AppStore.png'
import FACEBOOK from '../../images/Vector (1).png'
import TWITTER from '../../images/Vector (2).png'
import INSTAGRAM from '../../images/icon-instagram.png'
import IN from '../../images/Icon-Linkedin.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <div className={styles.ex}>Exclusive</div>
          <a href="/" className={styles.nav}>
            Subscribe
          </a>
          <a href="/" className={styles.p}>
            Get 10% off your first order
          </a>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
            />
            <img src={`${TELEGA}`} />
          </form>
        </div>
        <div className={styles.column}>
          <div className={styles.nav}>Support</div>
          <a href="/" className={styles.p}>
            111 Bijoy sarani, Dhaka,{<br />} DH 1515, Bangladesh.
          </a>
          <a href="/" className={styles.p}>
            exclusive@gmail.com
          </a>
          <a href="/" className={styles.p}>
            +88015-88888-9999
          </a>
        </div>
        <div className={styles.column}>
          <div className={styles.nav}>Account</div>
          <a href="/" className={styles.p}>
            My Account
          </a>
          <a href="/" className={styles.p}>
            Login / Register
          </a>
          <a href="/" className={styles.p}>
            Cart
          </a>
          <a href="/" className={styles.p}>
            Wishlist
          </a>
          <a href="/" className={styles.p}>
            Shop
          </a>
        </div>
        <div className={styles.column}>
          <div className={styles.nav}>Quick Link</div>
          <a href="/" className={styles.p}>
            Privacy Policy
          </a>
          <a href="/" className={styles.p}>
            Terms Of Use
          </a>
          <a href="/" className={styles.p}>
            FAQ
          </a>
          <a href="/" className={styles.p}>
            Contact
          </a>
        </div>
        <div className={styles.download}>
          <div className={styles.nav}>Download app</div>
          <p className={styles.save}>Save $3 with App New User Only</p>
          <div className={styles.body}>
            <img src={QR} />
            <div className={styles.row}>
              <a href="/">
                <img src={GP} />
              </a>
              <a href="/">
                <img src={APPSTORE} />
              </a>
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.socialsFlex}>
              <a href="/">
                <img src={FACEBOOK} />
              </a>
              <a href="/">
                <img src={TWITTER} />
              </a>
              <a href="/">
                <img src={INSTAGRAM} />
              </a>
              <a href="/">
                <img src={IN} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
