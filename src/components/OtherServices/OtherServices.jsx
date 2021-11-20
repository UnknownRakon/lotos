import * as styles from './OtherServices.module.scss';
import one from './2.jpeg';
import two from './5.jpeg';
import three from './11.jpeg';
import four from './9.jpeg';

const OtherServices = () => {
    return (
        <div className={styles.services}>
            <h2 className={styles.h2}>Дополнительные услуги:</h2>
            <div className={styles.cards}>
                <div
                    className={styles.card1}
                    style={{ backgroundImage: `url(${one})` }}
                >
                    <p className={styles.p}>Баня</p>
                </div>
                <div
                    className={styles.card2}
                    style={{ backgroundImage: `url(${two})` }}
                >
                    <p className={styles.p}>Аренда катера</p>
                </div>
                <div
                    className={styles.card3}
                    style={{ backgroundImage: `url(${three})` }}
                >
                    <p className={styles.p}>Приготовление трофеев</p>
                </div>
                <div
                    className={styles.card4}
                    style={{ backgroundImage: `url(${four})` }}
                >
                    <p className={styles.p}>
                        Экскурсионные программы на лотосовые поля
                    </p>
                </div>
            </div>
        </div>
    );
};
export default OtherServices;
