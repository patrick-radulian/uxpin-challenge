import React from 'react';
import * as CSS from "csstype"
import styles from './icon-button.module.css';
import { ReactSVG } from 'react-svg';

type IconButtonProps = {
    iconSrc: string

    style?: CSS.Properties
    iconHeight?: CSS.Property.Height<string | number>
    iconWidth?: CSS.Property.Width<string | number>
    iconColor?: CSS.Property.Fill
}

const IconButton: React.FC<IconButtonProps> = ({iconSrc, style, iconHeight = 12, iconWidth = 12, iconColor = "var(--gray-lighten10)"}: IconButtonProps) => {
    const btnStyle: CSS.Properties<string | number> = {
        ...style,
        height: style?.height ? `${style.height}px` : "24px",
        width: style?.width ? `${style.width}px` : "24px",
    }

    const setSvgStyle = (svg: SVGSVGElement) => {
        const width = `width: ${iconWidth}px`;
        const height = `height: ${iconHeight}px`;
        const fill = `fill: ${iconColor}`;

        return svg.setAttribute("style", `${width}; ${height}; ${fill};`);
    }

    return (
        <button className={styles['icon-button']} style={btnStyle}>
            <ReactSVG src={iconSrc} beforeInjection={svg => setSvgStyle(svg)}/>
        </button>
    )
}

export default IconButton;