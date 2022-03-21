import React from "react";
import * as CSS from "csstype";
import style from "./button.module.css";

type ButtonProps = {
    children?: string
    variant?: "default" | "neutral"
    weight?: "light" | "heavy"
    size?: "small" | "large"
    stretched?: boolean
    icon?: React.ReactElement
    iconPosition?: "start" | "end"
    disabled?: boolean
    style?: CSS.Properties
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({children, variant = "default", weight = "heavy", size, ...rest}: ButtonProps) => {
    const btnClassName: string = `${style.button} ${variant} ${weight} ${size ? size : ""} ${rest.stretched ? "stretched" : ""} ${rest.className ? rest.className : ""}`;

    return (
        <button className={btnClassName} onClick={rest.onClick} style={rest.style}>
            {rest.icon && rest.icon}
            {children}
        </button>
    )
}

export default Button;