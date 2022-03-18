import React from "react"
import * as CSS from "csstype"
import styles from "./ripple.module.css";

type RippleProps = {
    color?: CSS.Property.Color
}

type Coordinates = { x: number, y: number }

type Dimensions = { width: number, height: number }

type ClickAndTarget = {
    click: Coordinates,
    target: Coordinates & Dimensions
}

const rippleAnimation: Array<Keyframe> = [
    { opacity: 0.3, transform: "translate(-50%, -50%) scale(0)" },
    { transform: "translate(-50%, -50%) scale(0.5)" },
    { opacity: 0, transform: "translate(-50%, -50%) scale(1)" }
];

const rippleTiming: EffectTiming = {
    duration: 400,
    iterations: 1
}

const getClickAndTargetData = (e: React.MouseEvent<HTMLDivElement>): ClickAndTarget => {
    const target = e.target as HTMLDivElement;
    const boundingClientRect = target.getBoundingClientRect();

    return {
        click: { x: e.pageX, y: e.pageY },
        target: { x: boundingClientRect.x, y: boundingClientRect.y, width: boundingClientRect.width, height: boundingClientRect.height }
    }
}

const getRelativeClickCoordinates = ({click, target}: ClickAndTarget): Coordinates => {
    return { x: click.x - target.x, y: click.y - target.y }
}

const getLongestHorizontalDistance = (relativeClick: Coordinates, target: Coordinates & Dimensions): number => {
    return Math.max(relativeClick.x, target.width - relativeClick.x);
}

const Ripple: React.FC<RippleProps> = ({color = "var(--white)"}: RippleProps) => {
    const rippleRef = React.useRef<HTMLDivElement>(null);
    const rippleAnimationRef = React.useRef<Animation | undefined | null>(null);

    const generateRipple = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const clickAndTargetData = getClickAndTargetData(e);
        const relativeClickCoordinates = getRelativeClickCoordinates(clickAndTargetData);
        const longestHorizontalDistance = getLongestHorizontalDistance(relativeClickCoordinates, clickAndTargetData.target);

        rippleRef.current?.style.setProperty("top", `${relativeClickCoordinates.y}px`);
        rippleRef.current?.style.setProperty("left", `${relativeClickCoordinates.x}px`);
        rippleRef.current?.style.setProperty("width", `${longestHorizontalDistance * 2}px`);
        rippleRef.current?.style.setProperty("height", `${longestHorizontalDistance * 2}px`);
        rippleRef.current?.style.setProperty("background", color);

        rippleAnimationRef.current?.cancel();
        rippleAnimationRef.current = rippleRef.current?.animate(rippleAnimation, rippleTiming);
    }, [color]);

    return (
        <div onClick={generateRipple} className={styles["ripple-wrapper"]}>
            <div ref={rippleRef} className={styles.ripple}/>
        </div>
    )
}

export default Ripple;