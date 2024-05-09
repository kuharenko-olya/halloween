import {CalendarDays} from "lucide-react";

import styles from "./sass/Icon.module.scss";
import common from "../../styles/common.module.scss";
import PropTypes from "prop-types";
import {ReactComponent as Check} from '../../assets/svg/tick-square.svg';


export function TextWithIcon({optionalString,iconType}) {

    function renderIcon() {
        switch (iconType) {
            case 'calendar':
                return <CalendarDays size={20} />;
            case 'tick':
                return <Check/>;
            default:
                return null;
        }
    }


    return (
        <div className={styles.wrapper}>
            <button>{renderIcon()}</button>
            <span className={common['secondary-font']}>{optionalString}</span>
        </div>
    )
}

TextWithIcon.propTypes = {
    optionalString: PropTypes.string,
    iconType: PropTypes.string
}