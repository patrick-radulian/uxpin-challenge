import React from 'react';
import * as CSS from "csstype";
import styles from "./bar-item-group.module.css";

type BarItemProps = {
    justify?: CSS.Property.JustifySelf
    children?: React.ReactElement | Array<React.ReactElement>
}

const BarItemGroup: React.FC<BarItemProps> = (props: BarItemProps) => {
    return (
        <div className={styles['bar-item-group']} style={{justifySelf: props.justify}}>{props.children}</div>
    )
}

export default BarItemGroup;