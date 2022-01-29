import React from 'react';
import * as styles from './Input.module.scss';
import InputContainer from './InputContainer';

const Input = ({ data, onChange }) => {
    return (
        <InputContainer label={data.label}>
            <input
                className={styles.input}
                placeholder={data.placeholder}
                type={data.type}
                name={data.name}
                onChange={onChange}
            />
        </InputContainer>
    );
};
export default Input;
