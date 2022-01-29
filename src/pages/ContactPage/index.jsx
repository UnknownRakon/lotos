import { YMaps, Map } from 'react-yandex-maps';
import * as styles from './ContactPage.module.scss';

import one from './lodki.jpeg';

const ContactPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contact}>
                <img src={one} alt="lodki" className={styles.lodki} />
                <div className={styles.text}>
                    <h2 className={styles.h2}>Свяжитесь с нами</h2>
                    <p className={styles.p}>
                        Мы с радостью ответим на все ваши вопросы и поможем в
                        выборе.
                    </p>
                </div>
            </div>
            <div className={styles.information}>
                <h3 className={styles.h3}>Телефон</h3>
                <p className={styles.inf}>8-927-284-41-93</p>
                <h3 className={styles.h3}>Email</h3>
                <p className={styles.inf}>soc_zinovevana@pvrr.ru</p>
                <h3 className={styles.h3}>Адрес</h3>
                <p className={styles.inf}>Астраханская обл., 416428</p>
            </div>
            <div className={styles.map}>
                <h2 className={styles.h2map}>Как до нас добраться</h2>
                <YMaps>
                    <Map
                        height={320}
                        className={styles.carta}
                        defaultState={{
                            center: [45.617927679751084, 47.663072530682626],
                            zoom: 10,
                        }}
                    />
                </YMaps>
                <div className={styles.text2}>
                    <p className={styles.p}>
                        База «Каспийский лотос» расположена в 1,5 км от села
                        Вышка и в 150 км от Астрахани.
                    </p>

                    <p className={styles.p}>
                        Добраться сюда можно на личном автомобиле по трассе
                        E-119, через Лесное, Забурунное, Вышку, или
                        воспользовавшись услугой доставки транспортом базы
                        отдыха (по предварительному заказу).
                    </p>
                    <p className={styles.p}>
                        Территория базы находится у воды. Для гостевого водного
                        транспорта имеется стоянка и оборудованный лодочный
                        спуск.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ContactPage;
