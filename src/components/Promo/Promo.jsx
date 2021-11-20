import { useNavigate } from 'react-router-dom';
import BookingButton from '../BookingButton/BookingButton';
import * as styles from './Promo.module.scss';

const Promo = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.promo}>
            <h1 className={styles.h1}>Каспийский лотос</h1>
            <h2 className={styles.h2}>Лучшее место для вашего отдыха</h2>
            <BookingButton
                func={() => {
                    navigate('/booking');
                }}
            />
        </div>
    );
};
export default Promo;
