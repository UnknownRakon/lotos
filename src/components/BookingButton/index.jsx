import { motion } from 'framer-motion';
import * as styles from './BookingButton.module.scss';

const BookingButton = ({ onClick }) => {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            className={styles.button}
        >
            Забронировать
        </motion.button>
    );
};
export default BookingButton;
