import React from 'react';
import * as styles from './BookingPage.module.scss';
import Wave from './images/Wave';
import BookForm from './BookForm/BookForm';
import lake from './images/lake.png';
import Services from './Services/Services';

const BookingPage = () => {
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
                <BookForm />
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
                <Services />
            </form>
        </div>
    );
};
export default BookingPage;
