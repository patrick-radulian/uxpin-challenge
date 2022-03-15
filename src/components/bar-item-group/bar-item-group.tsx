import React from 'react';

type BarItemProps = {
    justify: "left" | "middle" | "right",
    children?: React.ReactElement | Array<React.ReactElement>
}

const BarItemGroup: React.FC<BarItemProps> = (props: BarItemProps) => {
    return (
        <div style={{justifySelf: props.justify}}>{props.children}</div>
    )
}

export default BarItemGroup;