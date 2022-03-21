import React from 'react';
import * as CSS from "csstype"
import styles from './icon-button.module.css';
import SVG from "react-inlinesvg";

type IconButtonProps = {
    iconSrc: string

    style?: CSS.Properties
    className?: string
    iconHeight?: CSS.Property.Height<string | number>
    iconWidth?: CSS.Property.Width<string | number>
    iconColor?: CSS.Property.Fill

    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const IconButton: React.FC<IconButtonProps> = ({
    iconSrc,
    style,
    className,
    iconHeight = 12,
    iconWidth = 12,
    iconColor = "var(--gray-lighten10)",
    onClick
}: IconButtonProps) => {

    const btnStyle: CSS.Properties<string | number> = {
        ...style,
        height: style?.height ? `${style.height}` : "24px",
        width: style?.width ? `${style.width}` : "24px",
    }

    return (
        <button onClick={onClick} className={`${styles['icon-button']} ${className ? className : ""}`} style={btnStyle}>
            <SVG src={iconSrc} height={iconHeight} width={iconWidth} fill={iconColor}/>
        </button>
    )
}

export default IconButton;