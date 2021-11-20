import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Phone from '../Phone/Phone';
import * as styles from './Header.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import useWindowDimensions from '../useWindowDimensions';

const Header = () => {
    const { width } = useWindowDimensions();
    return (
        <header className={styles.header}>
            <Logo />
            {width > 1200 ? (
                <>
                    <Nav />
                    <Phone />
                </>
            ) : (
                <Sidebar className={styles.sidebar} />
            )}
        </header>
    );
};

export default Header;
