import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as styles from './SidebarNav.module.scss';
import Phone from '../../Phone/Phone';

const data = [
    {
        to: '/',
        text: 'Главная',
    },
    {
        to: '/booking',
        text: 'Бронирование',
    },
    {
        to: '/services',
        text: 'Услуги',
    },
    {
        to: '/stock',
        text: 'Акции',
    },
    {
        to: '/news',
        text: 'Новости',
    },
    {
        to: '/contacts',
        text: 'Контакты',
    },
    {
        to: '/about',
        text: 'О базе',
    },
];
const variants = {
    open: {
        y: 0,
        opacity: 1,
        zIndex: 'unset',
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        zIndex: -100,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const SidebarNav = () => {
    return (
        <>
            {data.map(({ to, text }) => {
                return (
                    <motion.div
                        className={styles.sidebarNavItem}
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        key={text}
                    >
                        <NavLink to={to}>{text}</NavLink>
                    </motion.div>
                );
            })}
            <motion.div
                className={styles.sidebarNavItem}
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Phone />
            </motion.div>
        </>
    );
};
export default SidebarNav;
