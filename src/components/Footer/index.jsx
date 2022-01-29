import Container from '@components/Container';
import * as styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.contacts}>
                    <h3 className={styles.h3}>Контакты</h3>
                    <a className={styles.phone} href="tel:+7 (927) 284-41-93">
                        8 (927) 284-41-93
                    </a>
                    <a
                        className={styles.map}
                        href="https://goo.gl/maps/23F5pzzZhe1nYW8Q8"
                    >
                        Мы на картах
                    </a>
                </div>
            </Container>
        </footer>
    );
};
export default Footer;
