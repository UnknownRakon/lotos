import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as styles from './ServicesCard.module.scss';
import Banya from '../images/Icons/Banya';
import Flot from '../images/Icons/Flot';
import Forest from '../images/Icons/Forest';
import Hunting from '../images/Icons/Hunting';
import Kater from '../images/Icons/Kater';
import Ship from '../images/Icons/Ship';
import Tools from '../images/Icons/Tools';
import Trip from '../images/Icons/Trip';
import SVGCheckbox from '../SVGCHeckbox/SVGCHeckbox';

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
const ServicesCard = ({ data, setBookingData, bookingData }) => {
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
            <input
                type="checkbox"
                checked={isChecked ? 'checked' : ''}
                value={data.value}
                className={styles.input}
            />
            <div className={styles.checkbox}>
                <SVGCheckbox isChecked={isChecked} />
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
