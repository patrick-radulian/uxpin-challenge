import React from "react";
import styles from "./tooltip.module.css";

export type TooltipPosition = "top left" | "top" | "top right" | "right" | "bottom right" | "bottom" | "bottom left" | "left";

type TooltipProps = {
    children: string
    position?: TooltipPosition
}

const Tooltip: React.FC<TooltipProps> = ({children, position = "bottom"}: TooltipProps) => {
    return (
        <div className={`tooltip ${position}`}>
            <div className={styles.triangle}/>
            <span>{children}</span>
        </div>
    )
}

export default Tooltip;