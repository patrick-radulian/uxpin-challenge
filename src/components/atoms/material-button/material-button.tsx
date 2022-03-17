import React from "react"
import styles from "./material-button.module.css"

type MaterialButtonProps = {
    children?: string
    size?: "default" | "small" | "large"
    color?: "primary" | "secondary"
    variant?: "contained" | "outlined"
    fullWidth?: boolean
}

const MaterialButton: React.FC<MaterialButtonProps> = ({
    children,
    size = "default",
    color = "primary",
    variant = "contained",
    fullWidth = false
}: MaterialButtonProps) => {
    return (
        <div className={`${styles["material-button"]} ${size} ${color} ${variant} ${fullWidth ? "fullWidth" : ""}`}>
            {children}
        </div>
    )
}

export default MaterialButton;