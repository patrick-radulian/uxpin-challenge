import React from 'react';
import * as CSS from "csstype"
import styles from './icon-button.module.css';
import { ReactSVG } from 'react-svg';

type IconButtonProps = {
    iconSrc: string

    height?: CSS.Property.Height<string | number>
    width?: CSS.Property.Width<string | number>
    iconHeight?: CSS.Property.Height<string | number>
    iconWidth?: CSS.Property.Width<string | number>
    iconColor?: CSS.Property.Fill
}

const IconButton: React.FC<IconButtonProps> = ({iconSrc, height = 24, width = 24, iconHeight = 12, iconWidth = 12, iconColor = "var(--gray-lighten10)"}: IconButtonProps) => {
    const btnStyle: CSS.Properties<string | number> = {
        height,
        width
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