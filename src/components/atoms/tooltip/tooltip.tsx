import React from "react";
import Typography from "../typography/typography";
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
            <Typography variant="small" style={{color: "var(--silver-darken15)"}}>{children}</Typography>
        </div>
    )
}

export default Tooltip;