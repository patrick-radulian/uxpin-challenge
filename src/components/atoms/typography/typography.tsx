import React from "react"
import style from "./typography.module.css";

type TypographyProps = {
    children?: string
    variant?: "base" | "small" | "h2" | "h4" | "h6"
}

const Typography: React.FC<TypographyProps> = ({children, variant = "base"}: TypographyProps) => {
    return (
        <div className={`${style.typography} ${variant}`}>{children}</div>
    )
}

export default Typography;