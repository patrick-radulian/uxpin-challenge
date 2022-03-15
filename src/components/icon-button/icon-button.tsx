import React from 'react';
import styles from './icon-button.module.css';

type IconButtonProps = {
    icon: string
    alt: string
}

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
    return (
        <button className={styles['icon-button']}>
            <img src={props.icon} alt={props.alt}/>
        </button>
    )
}

export default IconButton;