import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import Phone from '../phone/Phone';
import * as styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
            <Phone />
        </header>
    );
};

export default Header;
