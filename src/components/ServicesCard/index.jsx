import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as styles from './ServicesCard.module.scss';
import Banya from '../../pages/BookingPage/images/Icons/Banya';
import Flot from '../../pages/BookingPage/images/Icons/Flot';
import Forest from '../../pages/BookingPage/images/Icons/Forest';
import Hunting from '../../pages/BookingPage/images/Icons/Hunting';
import Kater from '../../pages/BookingPage/images/Icons/Kater';
import Ship from '../../pages/BookingPage/images/Icons/Ship';
import Tools from '../../pages/BookingPage/images/Icons/Tools';
import Trip from '../../pages/BookingPage/images/Icons/Trip';

const Icons = {
    Banya,
    Flot,
    Forest,
    Hunting,
    Kater,
    Ship,
    Tools,
    Trip,
};
const ServicesCard = ({ data, setBookingData, bookingData, heading }) => {
    const Icon = Icons[data.icon];
    const [isChecked, setIsChecked] = useState(false);
    const handleChecked = () => {
        setIsChecked((prev) => {
            return !prev;
        });

        if (!isChecked) {
            setBookingData({
                ...bookingData,
                services: [...bookingData.services, data.value],
            });
        } else {
            setBookingData({
                ...bookingData,
                services: bookingData.services.filter((val) => {
                    return val !== data.value;
                }),
            });
        }
    };
    return (
        <motion.div
            className={styles.container}
            onClick={handleChecked}
            whileHover={{ y: -5, duration: 0.8, type: 'spring' }}
        >
            <div className={styles.checkbox}>
                <input type="checkbox" id={heading} />
            </div>
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.heading}>{data.heading}</div>
            <div className={styles.desc}> {data.desc}</div>
        </motion.div>
    );
};
export default ServicesCard;
