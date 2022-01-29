import React from 'react';
import * as styles from './Input.module.scss';

const InputContainer = ({ label, children }) => {
    return (
        <div className={styles.container}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.label}>{label}</label>
            {children}
        </div>
    );
};
export default InputContainer;
