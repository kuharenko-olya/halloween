import styles from './sass/Footer.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBehance, faFigma, faLinkedinIn, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import common from "../../styles/common.module.scss";


export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-info']}>
                <a className={`${styles['contact']} ${common['primary-font']}`} href="tel:1-987-46-52">phone
                    reservation? (+1) 987 46 52</a>
                <div className={styles['social-media']}>
                    <a className={styles.icon} href=""><FontAwesomeIcon icon={faBehance}/></a>
                    <a className={styles.icon} href=""><FontAwesomeIcon icon={faFigma}/></a>
                    <a className={styles.icon} href=""><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a className={styles.icon} href=""><FontAwesomeIcon icon={faInstagram}/></a>
                    <a className={styles.icon} href=""><FontAwesomeIcon icon={faYoutube}/></a>
                </div>
            </div>
        </footer>
    )
}
