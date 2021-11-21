import React, { useEffect, useState } from 'react';
import * as styles from './BookingPage.module.scss';
import Wave from './images/Wave';
import BookForm from './BookForm/BookForm';
import lake from './images/lake.png';
import Services from './Services/Services';
import api from '../../utils/api';
import BookingButton from '../BookingButton/BookingButton';

const BookingPage = () => {
    useEffect(async () => {
        const data = await api('get', 'gethome');
        console.log(data);
    }, []);
    const defaultBooking = {
        name: '',
        surname: '',
        datefrom: 0,
        dateto: 0,
        number: '',
        vip: false,
        services: [],
    };
    const [bookingData, setBookingData] = useState(defaultBooking);

    const sendReques = async () => {
        console.log(bookingData);
        const resp = await api('post', 'addrent', bookingData);
        console.log(resp);
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
                <div className={styles.right}>
                    <img src={lake} alt="" />
                </div>
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
                    <BookingButton func={sendReques} />
                </div>
            </form>
        </div>
    );
};
export default BookingPage;
