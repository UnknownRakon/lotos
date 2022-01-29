import { motion } from 'framer-motion';
import * as styles from './BookingButton.module.scss';

const BookingButton = ({ onClick, text }) => {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            className={styles.button}
        >
            {text}
        </motion.button>
    );
};
export default BookingButton;
