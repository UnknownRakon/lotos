import LotusLogo from './logo.svg';
import * as styles from './Logo.module.scss';

const Logo = () => {
    return <img src={LotusLogo} className={styles.logo} alt="Lotus Logo" />;
};
export default Logo;
