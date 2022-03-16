import React from "react";
import Tooltip, { TooltipPosition } from "components/atoms/tooltip/tooltip";
import styles from "./with-tooltip.module.css";

type WithTooltipProps<T> = T & {
    tooltip: string
    tooltipPosition?: TooltipPosition
}

const withTooltip = <T extends object>(WrappedComponent: React.ComponentType<T>) => {

    const WrapperComponent: React.FC<WithTooltipProps<T>> = (props: WithTooltipProps<T>) => {
        return (
            <div className={styles.wrapper}>
                <WrappedComponent className={styles["with-tooltip"]} {...(props as T)}/>
                <Tooltip position={props.tooltipPosition}>{props.tooltip}</Tooltip>
            </div>
        )
    }

    return WrapperComponent;
}

export default withTooltip;

