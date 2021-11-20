import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import * as styles from './AboutPage.module.scss';

import one from './lodki.jpeg';
import two from './4.jpeg';
import three from './9.jpeg';

const AboutPage = () => {
    const data = [
        {
            src: one,
        },
        {
            src: two,
        },
        {
            src: three,
        },
    ];
    return (
        <div className={styles.about}>
            <h2 className={styles.h2}>О базе</h2>
            <Carousel
                images={data}
                isAutoPlaying={false}
                hasIndexBoard={false}
                hasMediaButton={false}
                hasSizeButton={false}
                className={styles.carusel}
            />
            <div className={styles.text}>
                <h3 className={styles.h3}>Каспийский лотос</h3>
                <p className={styles.p}>
                    База отдыха «Каспийский лотос» предлагает отдых с рыбалкой и
                    проживанием в домиках вблизи раскатов Каспия.
                </p>

                <p className={styles.p}>
                    База отдыха Каспийский лотос может предоставить полный
                    спектр услуг необходимых для комфортной рыбалки.
                </p>
                <p className={styles.p}>
                    База отдыха Каспийский Лотос предоставляет комфортный отдых
                    для семей на природе, где они могут насладиться прогулками
                    по воде на катере, поездкам на лошадях по окрестностям.
                </p>
                <p className={styles.p}>
                    Для проведение корпоративного отдыха доступна площадка под
                    навесом с аудиосистемой и возможностью размещения столов и
                    проведения мероприятий с ведущим.
                </p>
            </div>
        </div>
    );
};
export default AboutPage;
