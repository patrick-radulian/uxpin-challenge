import React from 'react';
import * as CSS from "csstype"
import styles from './icon-button.module.css';

type IconButtonProps = {
    iconSrc: string
    alt: string
    style?: CSS.Properties
}

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
    return (
        <button className={styles['icon-button']}>
            <img src={props.iconSrc} alt={props.alt}/>
        </button>
    )
}

export default IconButton;