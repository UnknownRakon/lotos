import { NavLink } from 'react-router-dom';
import * as styles from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavLink
                to="/"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Главная
            </NavLink>
            <NavLink
                to="/booking"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Бронирование
            </NavLink>
            <NavLink
                to="/services"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Услуги
            </NavLink>
            <NavLink
                to="/stock"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Акции
            </NavLink>
            <NavLink
                to="/news"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Новости
            </NavLink>
            <NavLink
                to="/contacts"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Контакты
            </NavLink>
            <NavLink
                to="/about"
                activeClassName={styles.selected}
                className={styles.link}
            >
                О базе
            </NavLink>
        </nav>
    );
};

export default Nav;
