import React from 'react';
import * as styles from './BookForm.module.scss';
import Input from '../Input/Input';
import data from './data';
import InputContainer from '../Input/InputContainer';

const BookForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.sectionHeader}>
                    Введите контактную информацию
                </div>
                <div className={`${styles.inputs} ${styles.column}`}>
                    {data[0].map((item) => {
                        return <Input data={item} key={item.label} />;
                    })}
                </div>
                <div className={styles.sectionHeader}>Выберите даты</div>
                <div className={styles.inputs}>
                    {data[1].map((item) => {
                        return <Input data={item} key={item.label} />;
                    })}
                </div>
                <div className={styles.sectionHeader}>Выберите свой домик</div>
                <div className={styles.inputs}>
                    <InputContainer label="Тип домика">
                        <select
                            name="houseType"
                            id="houseType"
                            className={styles.select}
                        >
                            <option value="Standard" className={styles.option}>
                                Стандарт 1000 руб
                            </option>
                            <option value="VIP" className={styles.option}>
                                Улучшенный 2000 руб
                            </option>
                        </select>
                    </InputContainer>
                </div>
            </div>
        </div>
    );
};
export default BookForm;
