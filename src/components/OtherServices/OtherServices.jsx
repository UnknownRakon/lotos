import * as styles from './OtherServices.module.scss';
import one from './2.jpeg';
import two from './5.jpeg';
import three from './11.jpeg';
import four from './9.jpeg';

const cards = [
    {
        heading: 'Баня',
        image: one,
    },
    {
        heading: 'Аренда катера',
        image: two,
    },
    {
        heading: 'Приготовление трофеев',
        image: three,
    },
    {
        heading: 'Экскурсионные программы на лотосовые поля',
        image: four,
    },
];
const OtherServices = () => {
    return (
        <div className={styles.services}>
            <h2 className={styles.h2}>Дополнительные услуги:</h2>
            <div className={styles.cards}>
                {cards.map(({ heading, image }, i) => {
                    return (
                        <div
                            className={`${styles[`card${i + 1}`]} ${
                                styles.card
                            }`}
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            <p className={styles.p}>{heading}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default OtherServices;
