import React from 'react';
import MainServices from '@components/MainServices';
import OtherServices from '@components/OtherServices';
import Promo from '@components/Promo';

const MainPage = () => {
    return (
        <div>
            <Promo />
            <MainServices />
            <OtherServices />
        </div>
    );
};
export default MainPage;
