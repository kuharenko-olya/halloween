import styles from "./sass/About.module.scss";
import common from "../../styles/common.module.scss";
import {ReactComponent as ArrowRight} from '../../assets/svg/arrow-right.svg';
import {ReactComponent as ArrowLeft} from '../../assets/svg/arrow-left.svg';
import {ReactComponent as Ticket} from '../../assets/svg/ticket.svg';
import {MapPin} from 'lucide-react';
import {TextWithIcon} from "../TextWithIcon/TextWithIcon.jsx";

export function About() {
    return (
        <section className={common.section}>
            <h1 className={`${styles['about-title']} ${common['title']}`}>Join us</h1>
            <div className={styles['title-container']}>
                <ArrowRight/>
                <h2 className={`${styles['subtitle']} ${common['title']}`}>This year’s Halloween Party!</h2>
                <ArrowLeft/>
            </div>
            <p className={styles.description}>Our Halloween party this year will be an unforgettable experience,
                filled <br/> with spooky decorations,
                eerie music, thrilling games, and costume <br/> contests. Join us for a night of magic and fright!</p>

            <div className={styles['ticket-container']}>
                <div className={`${styles['ticket']} ${styles['border']}`}>
                    <Ticket/>
                </div>
                <div className={`${styles['info']} ${styles['border']}`}>
                    <div className={styles.date}>Tue, 31 Octobr 2023, 19:00</div>
                    <div className={styles.location}>
                        <MapPin className={styles.logo}/>
                        <div>The Menza Club, Istanbul city</div>
                    </div>
                </div>
            </div>

            <div className={styles.features}>
                <TextWithIcon
                    optionalString='NightWitch hunt'
                    iconType='tick'
                />
                <TextWithIcon
                    optionalString='Bestcostume contest'
                    iconType='tick'
                />
                <TextWithIcon
                    optionalString='DeliciousCakes and sweets'
                    iconType='tick'
                />
                <TextWithIcon
                    optionalString='Everybody get tipsy'
                    iconType='tick'
                />
                <TextWithIcon
                    optionalString='Dance-off with a star guest'
                    iconType='tick'
                />
            </div>

        </section>
    )
}