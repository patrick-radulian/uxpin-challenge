import React from "react"
import * as CSS from "csstype"
import styles from "./zoom-control.module.css"
import Input from "../input/input"

type ZoomControlProps = {
    zoom: number
    onChange: (e: ZoomType | React.ChangeEvent<HTMLInputElement>) => void
    style?: CSS.Properties
}

export type ZoomType = "in" | "out"

const ZoomControl: React.FC<ZoomControlProps> = ({zoom, onChange, style}: ZoomControlProps) => {
    const onZoomOut = React.useCallback(() => onChange("out"), [onChange]);
    const onZoomIn = React.useCallback(() => onChange("in"), [onChange]);

    return (
        <div className={styles["zoom-control"]} style={style}>
            <div onClick={onZoomOut} className={styles["zoom-action"]}>-</div>
            <Input onChange={onChange} value={`${zoom}%`} className={styles["zoom-status"]}/>
            <div onClick={onZoomIn} className={styles["zoom-action"]}>+</div>
        </div>
    )
}

export default ZoomControl;