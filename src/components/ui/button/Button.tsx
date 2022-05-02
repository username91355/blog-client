import React from 'react';
import styles from './Button.module.scss';

interface IProps {
    type: 'basic' | 'alternative ' | 'success' | 'danger'
    title: string
}

const Button: React.FC<IProps> = React.memo(props => {

    const {
        type,
        title,
        ...restProps
    } = props;

    return (
        <button
            className={styles.button}
            {...restProps}
        >
            {title}
        </button>
    );
});

export default Button;