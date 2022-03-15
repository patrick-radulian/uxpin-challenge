import React from 'react';
import * as CSS from "csstype";
import styles from "./separator.module.css";

type SeparatorProps = {
    color?: CSS.Property.Color
}

const Separator: React.FC<SeparatorProps> = (props: SeparatorProps) => {
    return (
        <hr className={styles.separator} style={{borderColor: props.color}}/>
    )
}

export default Separator;