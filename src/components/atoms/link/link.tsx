import React from "react";
import * as CSS from "csstype";
import styles from "./link.module.css";
import SVG from "react-inlinesvg";

type LinkProps = {
    children: React.ReactElement | string | Array<React.ReactElement | string>
    href?: string
    underline?: boolean
    iconSrc?: string
    iconPosition?: "start" | "end"
    iconWidth?: number
    iconHeight?: number
    style?: CSS.Properties
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const Link: React.FC<LinkProps> = ({
    children,
    href,
    underline = true,
    iconSrc,
    iconPosition = "start",
    iconWidth = 12,
    iconHeight = 12,
    style,
    onClick
}: LinkProps) => {
    const icon = iconSrc ? <SVG src={iconSrc} height={iconHeight} width={iconWidth} fill="currentColor"/> : null;

    return (
        <a className={styles.link} {...(href && { href })} onClick={onClick} style={style}>
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