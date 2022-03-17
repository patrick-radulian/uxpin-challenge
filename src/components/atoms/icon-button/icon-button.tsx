import React from 'react';
import * as CSS from "csstype"
import styles from './icon-button.module.css';
import { ReactSVG } from 'react-svg';

type IconButtonProps = {
    iconSrc: string
    alt: string
    style?: CSS.Properties
}

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
    return (
        <button className={styles['icon-button']} style={props.style}>
            <ReactSVG src={props.iconSrc}/>
        </button>
    )
}

export default IconButton;