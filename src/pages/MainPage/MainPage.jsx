import MainServices from '../../components/MainServices/MainServices';
import OtherServices from '../../components/OtherServices/OtherServices';
import Promo from '../../components/Promo/Promo';

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
