import React from 'react';
import * as CSS from "csstype";

type BarItemProps = {
    justify?: CSS.Property.JustifySelf,
    children?: React.ReactElement | Array<React.ReactElement>
}

const BarItemGroup: React.FC<BarItemProps> = (props: BarItemProps) => {
    return (
        <div style={{justifySelf: props.justify}}>{props.children}</div>
    )
}

export default BarItemGroup;