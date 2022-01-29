import * as styles from './MainServices.module.scss';
import one from './25.jpg';
import two from './3.jpeg';
import three from './4.jpeg';
import four from './20.jpeg';

const MainServices = () => {
    const cards = [
        {
            image: one,
            text: 'Охраняемая территория',
        },
        {
            image: two,
            text: 'Трансфер до базы',
        },
        {
            image: three,
            text: '2-х местный номер',
        },
        {
            image: four,
            text: 'Cпортивная площадка',
        },
    ];
    return (
        <div className={styles.services}>
            <h2 className={styles.h2}>В стоимость входит:</h2>
            <div className={styles.cards}>
                {cards.map((item) => {
                    const { id } = item;
                    return (
                        <div
                            key={id}
                            className={styles.card}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <p className={styles.p}>{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default MainServices;
