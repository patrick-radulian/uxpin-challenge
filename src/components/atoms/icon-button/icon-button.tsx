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

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
    const btnStyle: CSS.Properties<string | number> = {
        height: props.height,
        width: props.width
    }

    const setSvgStyle = (svg: SVGSVGElement) => {
        const width = props.iconWidth ? `width: ${props.iconWidth}px` : "";
        const height = props.iconHeight ? `height: ${props.iconHeight}px` : "";
        const fill = props.iconColor ? `fill: ${props.iconColor}` : "";

        return svg.setAttribute("style", `${width}; ${height}; ${fill};`);
    }

    return (
        <button className={styles['icon-button']} style={btnStyle}>
            <ReactSVG src={props.iconSrc} beforeInjection={svg => setSvgStyle(svg)}/>
        </button>
    )
}

export default IconButton;