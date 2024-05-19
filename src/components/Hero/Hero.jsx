import styles from "./sass/Hero.module.scss";
import common from "../../styles/common.module.scss";
import {TextWithIcon} from "../TextWithIcon/TextWithIcon.jsx";
import {ReactComponent as Arrow} from '../../assets/svg/arrow-down.svg';
import {Button} from "../Button/Button.jsx";
import {BUTTON} from "../../constants/constants.js";
import { useNavigate } from "react-router-dom";


export function Hero() {

    const navigate = useNavigate();

    function goToPage(){
        navigate('/participants')
    }

    return (

        <div className={styles['main-background']}>
            <div className={`${styles['hero-container']} ${common['primary-font']}`}>

                <TextWithIcon
                    optionalString='31 Octobr 2023'
                    iconType='calendar'
                />
                <h2 className={common.title}>It's Halloween Party O'Clock!</h2>
                <Button onClick={goToPage}
                    optionalString="View"
                    variant={BUTTON.PRIMARY}
                />
            </div>

            <div className={styles['arrow-down']}>
                <button><Arrow/></button>
            </div>
        </div>
    )
}