import React from 'react';
import * as styles from './PromoPage.module.scss';
import ulov from './images/ulov.png';
import Blob from './images/Blob';

const promos = [
    {
        heading: 'Большой улов!',
        text: 'Закажите любые наши доп. услуги со скидкой 15% при покупке от 4 человек',
        image: ulov,
    },
];
const PromoPage = () => {
    return (
        <div className={styles.container}>
            {promos.map((promo) => {
                return (
                    <div className={styles.promo}>
                        <div className={styles.left}>
                            <div className={styles.blob}>
                                <Blob />
                            </div>
                            <h3 className={styles.heading}>{promo.heading}</h3>
                            <div className={styles.text}>{promo.text}</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.image}>
                                <img src={promo.image} alt=" " />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default PromoPage;
