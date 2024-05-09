import styles from './sass/Header.module.scss';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';
import common from '../../styles/common.module.scss';
import {Link} from 'react-router-dom';
import {Button} from "../../components/Button/Button.jsx";
import {BUTTON} from '../../constants/constants';


const menu = [
    {label: 'Home', link: '/home'},
    {label: 'Gallery', link: '/gallery'},
    {label: 'About Party', link: '/about'},
    {label: 'Reservation', link: '/reservation'},
    {label: 'Contacts', link: '/contacts'}
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