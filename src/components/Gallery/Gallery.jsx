import styles from './sass/Gallery.module.scss';
import common from '../../styles/common.module.scss';
import image1 from '../../assets/img/gallery/image01.png';
import image2 from '../../assets/img/gallery/image02.png';
import image3 from '../../assets/img/gallery/image03.png';
import image4 from '../../assets/img/gallery/image04.png';
import image5 from '../../assets/img/gallery/image05.png';
import image6 from '../../assets/img/gallery/image06.png';
import image8 from '../../assets/img/gallery/image08.png';
import image9 from '../../assets/img/gallery/image09.png';
import image10 from '../../assets/img/gallery/image10.png';
import image11 from '../../assets/img/Group.png';

export function Gallery() {
    return (
        <section className={common.section}>
            <h3 className={common.title}>Halloween memories</h3>
            <div className={styles.decoration}>
                <img src={image11} alt="image"/>
            </div>
            <div className={styles['gallery-container']}>
                <img src={image1} alt="halloween memories"/>
                <img src={image2} alt="halloween memories"/>
                <img src={image3} alt="halloween memories"/>
                <img src={image4} alt="halloween memories"/>
                <img src={image5} alt="halloween memories"/>
                <img src={image6} alt="halloween memories"/>
                <img src={image4} alt="halloween memories"/>
                <img src={image8} alt="halloween memories"/>
                <img src={image9} alt="halloween memories"/>
                <img src={image10} alt="halloween memories"/>
            </div>
        </section>
    )
}