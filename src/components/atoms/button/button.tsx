import React from "react";
import * as CSS from "csstype";
import style from "./button.module.css";

type ButtonProps = {
    children?: string
    variant?: "default" | "neutral" | "success" | "destructive"
    weight?: "light" | "heavy"
    size?: "small" | "large"
    stretched?: boolean
    iconSrc?: string
    disabled?: boolean
    style?: CSS.Properties
}

const Button: React.FC<ButtonProps> = ({children, variant = "default", weight = "heavy", size = "small", ...rest}: ButtonProps) => {
    return (
        <button className={`${style.button} ${variant} ${weight} ${size} ${rest.stretched ? "stretched" : ""}`} style={rest.style}>
            {rest.iconSrc && <img src={rest.iconSrc} alt=""/>}
            {children}
        </button>
    )
}

export default Button;