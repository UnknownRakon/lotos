import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as styles from './BookingPage.module.scss';
import Wave from './images/Wave';
import BookForm from './BookForm/BookForm';
import lake from './images/lake.png';
import Services from './Services/Services';
import api from '../../utils/api';
import BookingButton from '../BookingButton/BookingButton';

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
        datefrom: 0,
        dateto: 0,
        phone: '',
        vip: false,
        services: [],
    };
    const [bookingData, setBookingData] = useState(defaultBooking);

    const sendRequest = async () => {
        const resp = await api('post', '', {
            name: bookingData.name,
            surname: bookingData.surname,
            dateFrom: bookingData.datefrom,
            dateTo: bookingData.dateto,
            services: bookingData.services,
            homeType: bookingData.vip ? 'vip' : 'ordinary',
            phone: bookingData.phone,
        });
        console.log(resp);
        if (resp.status === 200) {
            alert('success');
        }
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
            <form className={styles.bookForm}>
                <BookForm
                    setBookingData={setBookingData}
                    bookingData={bookingData}
                />
                <motion.div
                    className={styles.right}
                    variants={levitatingVariants}
                    animate="animate"
                >
                    <img src={lake} alt="" />
                </motion.div>
                <div className={styles.sectionHeader}>
                    Выберите дополнительные услуги
                </div>
                <div className={styles.sectionSubHeader}>
                    О возможности их получения вам скажет администратор при
                    уточнении бронирования
                </div>
                <Services
                    setBookingData={setBookingData}
                    bookingData={bookingData}
                />
                <div className={styles.bookingButton__wrapper}>
                    <BookingButton onClick={sendRequest} />
                </div>
            </form>
        </div>
    );
};
export default BookingPage;
