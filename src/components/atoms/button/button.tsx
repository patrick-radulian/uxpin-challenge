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
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({children, variant = "default", weight = "heavy", size, ...rest}: ButtonProps) => {
    const className: string = `${style.button} ${variant} ${weight} ${size ? size : ""} ${rest.stretched ? "stretched" : ""}`;

    return (
        <button className={className} onClick={rest.onClick} style={rest.style}>
            {rest.iconSrc && <img src={rest.iconSrc} alt=""/>}
            {children}
        </button>
    )
}

export default Button;