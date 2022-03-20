import React from "react";
import styles from "./header.module.css";
import IconButton from "components/atoms/icon-button/icon-button";
import Typography from "components/atoms/typography/typography";
import VisibilityVisible from "icons/visibility-visible.svg";
import VisibilityHidden from "icons/visibility-hidden.svg";
import Gear from "icons/gear.svg";
import ToggleButton from "components/atoms/toggle-button/toggle-button";
import withTooltip from "components/higher-order/with-tooltip/with-tooltip";

const ToggleButtonWithTooltip = withTooltip(ToggleButton);
const IconButtonWithTooltip = withTooltip(IconButton);

const Header: React.FC<{}> = () => {
    return (
        <div className={styles.header}>
            <Typography variant="h2">Button</Typography>

            <div className={styles.actions}>
                <ToggleButtonWithTooltip iconSources={[VisibilityVisible, VisibilityHidden]} tooltip={`Toggle component\nvisibility in library`}/>
                <IconButtonWithTooltip iconSrc={Gear} tooltip="Component settings"/>
            </div>
        </div>
    )
}

export default Header;