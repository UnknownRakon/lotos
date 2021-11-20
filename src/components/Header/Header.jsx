import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Phone from '../Phone/Phone';
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
