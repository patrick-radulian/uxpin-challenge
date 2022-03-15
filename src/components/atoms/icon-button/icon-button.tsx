import React from 'react';
import styles from './icon-button.module.css';

type IconButtonProps = {
    iconSrc: string
    alt: string
}

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
    return (
        <button className={styles['icon-button']}>
            <img src={props.iconSrc} alt={props.alt}/>
        </button>
    )
}

export default IconButton;