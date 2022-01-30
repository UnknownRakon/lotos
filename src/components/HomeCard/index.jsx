import React from 'react';
import * as styles from './HomeCard.module.scss';

const HomeCard = ({
    setBookingData,
    bookingData,
    capacity,
    number,
    price,
    vip,
    id,
}) => {
    const chooseHandler = () => {
        setBookingData({
            ...bookingData,
            number,
            vip,
        });
        console.log(bookingData);
    };

    return (
        <div className={`${styles.card}`}>
            {vip && <span className={styles.flag}>VIP</span>}
            <p className={styles.number}>Номер домика: {number}</p>
            <p className={styles.desc}>
                Мест: {capacity}
                <br />
                Цена за ночь: {price}
            </p>
            <button
                className={styles.button}
                onClick={chooseHandler}
                type="button"
                disabled={bookingData.number === number}
            >
                {bookingData.number === number ? 'Выбрано' : 'Выбрать'}
            </button>
        </div>
    );
};

export default HomeCard;
