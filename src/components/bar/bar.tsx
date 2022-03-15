import React from "react";
import * as CSS from "csstype";
import styles from "./bar.module.css";

type BarProps = {
    children?: React.ReactElement | Array<React.ReactElement>,
    height?: CSS.Property.Height,
    alignItems?: CSS.Property.AlignItems
}

const Bar: React.FC<BarProps> = (props: BarProps) => {
    return (
        <div className={styles.bar} style={{height: props.height}}>{props.children}</div>
    )
}

export default Bar;