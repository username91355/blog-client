import React from 'react';
import styles from './Link.module.scss';

interface IProps {
    href: string
    title: string
}

const Link: React.FC<IProps> = React.memo(props => {

    const {href, title} = props;

    return (
        <a
            href={href}
            className={styles.link}
        >
            {title}
        </a>
    );
});

export default Link;