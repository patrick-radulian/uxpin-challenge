import React from "react";

type BarProps = {
    children?: React.ReactElement | Array<React.ReactElement>;
}

const Bar: React.FC<BarProps> = (props: BarProps) => {
    return (
        <div>{props.children}</div>
    )
}

export default Bar;