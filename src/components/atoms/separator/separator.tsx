import React from 'react';
import * as CSS from "csstype";
import styles from "./separator.module.css";

type SeparatorProps = {
    color?: CSS.Property.Color,
    vertical?: boolean
}

const Separator: React.FC<SeparatorProps> = (props: SeparatorProps) => {
    return (
        <div className={styles.separator} style={{background: props.color}}/>
    )
}

export default Separator;