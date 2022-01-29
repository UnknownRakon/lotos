import Logo from '../Logo';
import Nav from '../Nav';
import Phone from '../Phone';
import * as styles from './Header.module.scss';
import Sidebar from '../Sidebar';
import useWindowDimensions from '../../services/useWindowDimensions';

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
