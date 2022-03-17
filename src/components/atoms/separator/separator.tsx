import React from 'react';
import * as CSS from "csstype";
import styles from "./separator.module.css";

type SeparatorProps = {
    color?: CSS.Property.Color
    vertical?: boolean
    margin?: CSS.Property.Margin<string | number>
}

const Separator: React.FC<SeparatorProps> = (props: SeparatorProps) => {
    const style: CSS.Properties<string | number> = {
        color: props.color,
        height: props.vertical ? "100%" : "1px",
        width: props.vertical ? "1px" : "100%",
        margin: props.margin
    }

    return (
        <div className={styles.separator} style={style}/>
    )
}

export default Separator;