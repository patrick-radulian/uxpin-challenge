import React from "react";
import styles from "./header.module.css";
import IconButton from "components/atoms/icon-button/icon-button";
import Typography from "components/atoms/typography/typography";
import VisibilityVisible from "icons/visibility-visible.svg";
import Gear from "icons/gear.svg";

const Header: React.FC<{}> = () => {
    return (
        <div className={styles.header}>
            <Typography variant="h2">Button</Typography>
            <IconButton iconSrc={VisibilityVisible} style={{marginLeft: "4px"}}/>
            <IconButton iconSrc={Gear} style={{marginLeft: "5px"}}/>
        </div>
    )
}

export default Header;