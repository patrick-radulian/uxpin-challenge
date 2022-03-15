import React from "react";
import styles from "./bar.module.css";

type BarProps = {
    children?: React.ReactElement | Array<React.ReactElement>;
}

const Bar: React.FC<BarProps> = (props: BarProps) => {
    return (
        <div className={styles.bar}>{props.children}</div>
    )
}

export default Bar;