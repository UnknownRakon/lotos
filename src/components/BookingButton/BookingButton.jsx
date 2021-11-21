import * as styles from './BookingButton.module.scss';

const BookingButton = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick} className={styles.button}>
            Забронировать
        </button>
    );
};
export default BookingButton;
