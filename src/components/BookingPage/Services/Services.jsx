import React from 'react';
import * as styles from './Services.module.scss';
import ServicesCard from '../ServicesCard/ServicesCard';

const data = [
    {
        value: 'Tools',
        icon: 'Tools',
        heading: 'Аренда снаряжения',
        desc: '150 руб/чел',
    },
    {
        value: 'Kater',
        icon: 'Kater',
        heading: 'Аренда катера',
        desc: '150 руб/чел',
    },
    {
        value: 'Ship',
        icon: 'Ship',
        heading: 'Аренда теплохода',
        desc: '150 руб/чел',
    },
    {
        value: 'Banya',
        icon: 'Banya',
        heading: 'Баня',
        desc: '150 руб/чел',
    },
    {
        value: 'Forest',
        icon: 'Forest',
        heading: 'Услуги егеря',
        desc: '150 руб/чел',
    },
    {
        value: 'Flot',
        icon: 'Flot',
        heading: 'Использование собственного флота',
        desc: '150 руб/чел',
    },
    {
        value: 'Hunting',
        icon: 'Hunting',
        heading: 'Организация охоты',
        desc: '150 руб/чел',
    },
    {
        value: 'Trip',
        icon: 'Trip',
        heading: 'Экскурсионные программы',
        desc: '150 руб/чел',
    },
];
const Services = () => {
    return (
        <div className={styles.container}>
            {data.map((item) => {
                return <ServicesCard data={item} key={item.heading} />;
            })}
        </div>
    );
};
export default Services;
