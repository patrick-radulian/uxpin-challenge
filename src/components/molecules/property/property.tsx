import React from "react"
import styles from "./property.module.css"
import Typography from "components/atoms/typography/typography"
import VisibilityVisible from "icons/visibility-visible.svg";
import VisibilityHidden from "icons/visibility-hidden.svg";
import Trash from "icons/trash.svg";
import Plus from "icons/plus.svg";
import ActionClose from "icons/action-close.svg";
import IconButton from "components/atoms/icon-button/icon-button";
import withTooltip from "components/higher-order/with-tooltip/with-tooltip";
import Input from "components/atoms/input/input";
import TextArea from "components/atoms/text-area/text-area";

type PropertyProps = {
    name: string
    disabled?: boolean
}

const IconButtonWithTooltip = withTooltip(IconButton);

const Property: React.FC<PropertyProps> = ({name, disabled = false}: PropertyProps) => {
    const [open, setOpened] = React.useState<boolean>(false);

    const openDetails = () => setOpened(true);

    const closeDetails = () => setOpened(false);

    return (
        <div onClick={open ? undefined : openDetails} className={`${styles.property} ${open ? "open" : ""} ${disabled ? "disabled" : ""}`}>
            <div className={styles.name}>
                <Typography variant="h6">{name}</Typography>
                <IconButtonWithTooltip iconSrc={disabled ? VisibilityHidden : VisibilityVisible} tooltip={open ? "Hide property" : ""}/>
                {open && <IconButtonWithTooltip iconSrc={Trash} tooltip={open ? "Delete property" : ""}/>}
            </div>

            {open && (
                <div className={styles.details}>
                    <div className={styles.detail}><Typography>Property name</Typography> <Input defaultValue={name}/></div>
                    <div className={styles.detail}><Typography>Display name</Typography> <Input/></div>
                    <div className={styles.detail}><Typography>Description</Typography> <TextArea defaultValue="Blablub"/></div>
                    <div className={styles.detail}><Typography>Property type</Typography></div>
                </div>
            )}

            <div className={styles["toggle-icon"]}>
                <IconButton onClick={open ? closeDetails : undefined} iconSrc={open ? ActionClose : Plus}/>
            </div>
        </div>
    )
}

export default Property;