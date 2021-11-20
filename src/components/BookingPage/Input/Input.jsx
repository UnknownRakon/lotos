import React from 'react';
import * as styles from './Input.module.scss';
import InputContainer from './InputContainer';

const Input = ({ data }) => {
    return (
        <InputContainer label={data.label}>
            <input
                className={styles.input}
                placeholder={data.placeholder}
                type={data.type}
                name={data.name}
            />
        </InputContainer>
    );
};
export default Input;
