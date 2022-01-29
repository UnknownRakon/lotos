import { NavLink } from 'react-router-dom';
import * as styles from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={styles.link}>
                Главная
            </NavLink>
            <NavLink to="/booking" className={styles.link}>
                Бронирование
            </NavLink>
            <NavLink to="/services" className={styles.link}>
                Услуги
            </NavLink>
            <NavLink to="/stock" className={styles.link}>
                Акции
            </NavLink>
            <NavLink to="/news" className={styles.link}>
                Новости
            </NavLink>
            <NavLink to="/contacts" className={styles.link}>
                Контакты
            </NavLink>
            <NavLink to="/about" className={styles.link}>
                О базе
            </NavLink>
        </nav>
    );
};

export default Nav;
