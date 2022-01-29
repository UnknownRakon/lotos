import Logo from '@components/Logo';
import Nav from '@components/Nav';
import Phone from '@components/Phone';
import Sidebar from '@components/Sidebar';
import useWindowDimensions from '@services/useWindowDimensions';
import * as styles from './Header.module.scss';

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
