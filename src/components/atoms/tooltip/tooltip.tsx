import React from "react";
import styles from "./tooltip.module.css";

type TooltipProps = {
    children: string
}

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
    return (
        <div className={styles.tooltip}>
            <div className={styles.triangle}/>
            <span>{props.children}</span>
        </div>
    )
}

export default Tooltip;