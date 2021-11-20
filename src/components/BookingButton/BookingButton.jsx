import * as styles from './BookingButton.module.scss';

const BookingButton = ({ func }) => {
    return (
        <button type="button" onClick={func} className={styles.button}>
            Забронировать
        </button>
    );
};
export default BookingButton;
