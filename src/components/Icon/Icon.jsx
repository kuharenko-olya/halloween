import {CalendarDays} from "lucide-react";

import styles from "./sass/Icon.module.scss";
import common from "../../styles/common.module.scss";


export function Icon() {
    return (
        <div className={styles.wrapper}>
            <button><CalendarDays size={20}/></button>
            <span className={common['secondary-font']}>31 Octobr 2023</span>
        </div>
    )
}