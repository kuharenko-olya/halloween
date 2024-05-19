import styles from './sass/Header.module.scss';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';
import common from '../../styles/common.module.scss';
import {Link} from 'react-router-dom';
import {Button} from "../../components/Button/Button.jsx";
import {BUTTON} from '../../constants/constants';


const menu = [
    {label: 'Home', link: '/'},
    {label: 'Gallery'},
    {label: 'About Party'},
    {label: 'Reservation'},
    {label: 'Contacts'},
    {label: 'Events', link: '/events'},
];


export function Header() {
    return (
        <>

            <header className={styles.header}>
                <Link to="/">
                    <Logo/>
                </Link>
                <nav className={styles.nav}>
                    <ul className={common['secondary-font']}>
                        {menu.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button
                    optionalString="Reservation"
                    variant={BUTTON.PRIMARY}
                />
            </header>
        </>

    )
}