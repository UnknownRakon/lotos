import { motion } from 'framer-motion';
import * as styles from './BookingButton.module.scss';

const BookingButton = ({
    onClick,
    text,
    loading,
    disabled,
    type = 'button',
}) => {
    return (
        <motion.button
            onClick={onClick}
            className={styles.button}
            disabled={loading || disabled}
            type={type}
        >
            {!loading && text}

            {loading && (
                <div className={styles.heart}>
                    <div />
                </div>
            )}
        </motion.button>
    );
};
export default BookingButton;
