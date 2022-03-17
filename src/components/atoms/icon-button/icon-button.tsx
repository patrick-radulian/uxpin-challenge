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
}

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
    const btnStyle: CSS.Properties<string | number> = {
        height: props.height,
        width: props.width
    }

    const setSvgStyle = (svg: SVGSVGElement) => {
        const width = props.iconWidth ? `width: ${props.iconWidth}px` : "";
        const height = props.iconHeight ? `height: ${props.iconHeight}px` : "";

        return svg.setAttribute("style", `${width}; ${height};`);
    }

    return (
        <button className={styles['icon-button']} style={btnStyle}>
            <ReactSVG src={props.iconSrc} beforeInjection={svg => setSvgStyle(svg)}/>
        </button>
    )
}

export default IconButton;