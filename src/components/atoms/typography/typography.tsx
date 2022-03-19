import React from "react"
import styles from "./typography.module.css";
import * as CSS from "csstype"

type TypographyProps = {
    children?: string
    variant?: "base" | "small" | "h2" | "h4" | "h6",
    style?: CSS.Properties
    className?: string
}

const Typography: React.FC<TypographyProps> = ({children, variant = "base", style, className}: TypographyProps) => {
    return (
        <div className={`${className ? className : ""} ${styles.typography} ${variant}`} style={style}>{children}</div>
    )
}

export default Typography;