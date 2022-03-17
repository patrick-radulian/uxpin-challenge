import React from "react";
import * as CSS from "csstype";
import IconButton from "../icon-button/icon-button";

type ToggleButtonProps = {
    iconSources: [string, string]
    style?: CSS.Properties
}

const ToggleButton: React.FC<ToggleButtonProps> = ({iconSources, style}: ToggleButtonProps) => {
    const [icon, setIcon] = React.useState<0 | 1>(0);

    const toggleIcon = () => {
        setIcon(() => {
            return icon === 0 ? 1 : 0;
        });
    }

    return (
        <IconButton onClick={toggleIcon} iconSrc={iconSources[icon]} style={style}/>
    )
}

export default ToggleButton;