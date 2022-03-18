import React from "react";
import * as CSS from "csstype";
import styles from "./link.module.css";
import SVG from "react-inlinesvg";

type LinkProps = {
    children: React.ReactElement | string | Array<React.ReactElement | string>
    linkTo: string
    underline?: boolean
    iconSrc?: string
    iconPosition?: "start" | "end"
    iconWidth?: number
    iconHeight?: number
    style?: CSS.Properties
}

const Link: React.FC<LinkProps> = ({children, linkTo, underline = true, iconSrc, iconPosition = "start", iconWidth = 12, iconHeight = 12, style}: LinkProps) => {
    const icon = iconSrc ? <SVG src={iconSrc} height={iconHeight} width={iconWidth} fill="currentColor"/> : null;

    return (
        <a className={styles.link} href={linkTo} style={style}>
            {icon && iconPosition === "start" && icon}

            <div className={styles["link-text"]}>
                {children}
                {underline && <div className={styles["link-decoration"]}></div>}
            </div>

            {icon && iconPosition === "end" && icon}
        </a>
    )
}

export default Link;