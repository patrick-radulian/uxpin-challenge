import React from "react";
import styles from "./with-tooltip.module.css";

type WithRippleProps<T> = T & {

}

const withRipple = <T extends object>(WrappedComponent: React.ComponentType<T>) => {

    const WrapperComponent: React.FC<WithRippleProps<T>> = (props: WithRippleProps<T>) => {
        return (
            <div className={styles.wrapper}>
                <WrappedComponent className={styles["with-tooltip"]} {...(props as T)}/>
            </div>
        )
    }

    return WrapperComponent;
}

export default withRipple;