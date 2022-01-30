import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '@services/api';
import BookingButton from '@components/BookingButton';
import HomeCard from '@components/HomeCard';

import Services from './Services';

import * as styles from './BookingPage.module.scss';
import Wave from './images/Wave';
import lake from './images/lake.png';

const levitatingVariants = {
    animate: {
        y: [-10, 10],
        transition: {
            type: 'spring',
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
};
const BookingPage = () => {
    const defaultBooking = {
        name: '',
        surname: '',
        number: '',
        phone: '',
        vip: false,
        services: [],
    };
    const defaultDate = {
        datefrom: 0,
        dateto: 0,
        available: false,
    };

    const [bookingData, setBookingData] = useState(defaultBooking);
    const [available, setAvailable] = useState();
    const [loading, setLoading] = useState(false);

    const [date, setDate] = useState(defaultDate);

    const sendRequest = async (e) => {
        e.preventDefault();
        const resp = await api('post', 'rent', {
            name: bookingData.name,
            surname: bookingData.surname,
            dateFrom: date.datefrom,
            dateTo: date.dateto,
            services: bookingData.services,
            homeType: bookingData.vip ? 'vip' : 'ordinary',
            phone: bookingData.phone,
            home: bookingData.number,
        });
        if (resp.status === 200) {
            alert('Вы успешно забронировали домик. Скоро с вам свяжутся');
            setDate(defaultDate);
            setBookingData(defaultBooking);
            setAvailable(null);
            e.target.reset();
        }
    };

    const dateOnChange = (e) => {
        if (e.target.id === 'date-to') {
            const data = date;
            data.dateto = +new Date(e.target.value);
            setDate(data);
        } else {
            const data = date;
            data.datefrom = +new Date(e.target.value);
            setDate(data);
        }
    };

    const checkAvailability = async () => {
        setLoading(true);
        const response = await api(
            'get',
            `house/available/date?from=${date.datefrom}&to=${date.dateto}`
        );
        setAvailable(response.data);
        setLoading(false);
    };
    const handleInputChange = (event) => {
        setBookingData({
            ...bookingData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className={styles.bookingPage}>
            <div className={styles.heading}>
                <div className={styles.text}>
                    <h2 className={styles.textHeading}>
                        Мы заботимся о вашем комфорте
                    </h2>
                    <div className={styles.textDesc}>
                        Нашей главной целью является предоставление лучших услуг
                        для гостей Каспийского лотоса
                    </div>
                </div>
                <div className={styles.wave}>
                    <Wave />
                </div>
            </div>
            <form onSubmit={sendRequest} id="bookingFrom">
                <div className={styles.bookForm}>
                    <div className={styles.date__wrapper}>
                        <div className={styles.sectionHeader}>
                            Введите контактную информацию
                        </div>
                        <label htmlFor="name" className={styles.date__label}>
                            Ваше имя:
                            <input
                                id="name"
                                placeholder="Иван"
                                type="text"
                                name="name"
                                className={styles.date__input}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label htmlFor="surname" className={styles.date__label}>
                            Ваша фамилия:
                            <input
                                id="surname"
                                placeholder="Иванов"
                                type="text"
                                name="surname"
                                className={styles.date__input}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label htmlFor="phone" className={styles.date__label}>
                            Ваш телефон:
                            <input
                                id="phone"
                                placeholder="+7 (989) 123-12-31"
                                type="text"
                                name="phone"
                                className={styles.date__input}
                                onChange={handleInputChange}
                            />
                        </label>
                        <div className={styles.sectionHeader}>
                            Выберите даты
                        </div>
                        <label
                            htmlFor="date-from"
                            className={styles.date__label}
                        >
                            Введите дату приезда:
                            <input
                                id="date-from"
                                type="date"
                                className={styles.date__input}
                                onChange={dateOnChange}
                            />
                        </label>
                        <label htmlFor="date-to" className={styles.date__label}>
                            Введите дату отъезда:
                            <input
                                id="date-to"
                                type="date"
                                className={styles.date__input}
                                onChange={dateOnChange}
                            />
                        </label>
                        <BookingButton
                            onClick={checkAvailability}
                            text="Проверить даты"
                            loading={loading}
                        />
                    </div>
                    <motion.div
                        className={styles.right}
                        variants={levitatingVariants}
                        initial={{ y: 0 }}
                        animate="animate"
                    >
                        <img src={lake} alt="lake" />
                    </motion.div>
                </div>
                <div className={styles.homecard__wrapper}>
                    {available && (
                        <div className={styles.sectionHeader}>
                            Выберите себе домик:
                        </div>
                    )}
                    {available &&
                        available.map((e) => {
                            return (
                                <HomeCard
                                    setBookingData={setBookingData}
                                    bookingData={bookingData}
                                    key={e._id}
                                    capacity={e.capacity}
                                    number={e.number}
                                    price={e.price}
                                    vip={e.vip}
                                    id={e._id}
                                />
                            );
                        })}
                </div>
                {available && (
                    <div>
                        <div className={styles.sectionHeader}>
                            Выберите дополнительные услуги
                        </div>
                        <div className={styles.sectionSubHeader}>
                            О возможности их получения вам скажет администратор
                            при уточнении бронирования
                        </div>
                        <Services
                            setBookingData={setBookingData}
                            bookingData={bookingData}
                        />
                        <div className={styles.bookingButton__wrapper}>
                            <BookingButton type="submit" text="Забронировать" />
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};
export default BookingPage;
