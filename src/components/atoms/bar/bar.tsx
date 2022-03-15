import React from "react";
import * as CSS from "csstype";
import styles from "./bar.module.css";

type BarProps = {
    children?: React.ReactElement | Array<React.ReactElement>
    style?: CSS.Properties
}

const Bar: React.FC<BarProps> = (props: BarProps) => {
    return (
        <div className={styles.bar} style={props.style}>{props.children}</div>
    )
}

export default Bar;