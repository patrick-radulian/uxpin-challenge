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
import Select from "components/atoms/select/select";

type PropertyField = {
    field: string
    type: "input" | "textarea" | "select" | "switch"
    value: string | boolean
}

export type PropertyProps = {
    name: string
    fields: Array<PropertyField>
    disabled: boolean
}

const IconButtonWithTooltip = withTooltip(IconButton);

const Property: React.FC<PropertyProps> = ({name, fields, disabled}: PropertyProps) => {
    const [open, setOpened] = React.useState<boolean>(false);
    const [propertyName, setPropertyName] = React.useState<string>(name);
    const [displayName, setDisplayName] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("Blablub");
    // const [propertyType, setPropertyType] = React.useState<string>(type);

    const openDetails = () => setOpened(true);

    const closeDetails = () => setOpened(false);

    const onChangePropertyName = (e: React.ChangeEvent<HTMLInputElement>) => setPropertyName(e.target.value);

    const onChangeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value);

    const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

    // const onChangePropertyType = (e: React.ChangeEvent<HTMLInputElement>) => setPropertyType(e.target.value);

    return (
        <div onClick={open ? undefined : openDetails} className={`${styles.property} ${open ? "open" : ""} ${disabled ? "disabled" : ""}`}>
            <div className={styles.name}>
                <Typography variant="h6">{name}</Typography>
                <IconButtonWithTooltip iconSrc={disabled ? VisibilityHidden : VisibilityVisible} tooltip={open ? "Hide property" : ""}/>
                {open && <IconButtonWithTooltip iconSrc={Trash} tooltip={open ? "Delete property" : ""}/>}
            </div>

            {open && (
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <Typography>Property name</Typography> <Input onChange={onChangePropertyName} value={propertyName}/>
                    </div>
                    <div className={styles.detail}>
                        <Typography>Display name</Typography> <Input onChange={onChangeDisplayName} value={displayName}/>
                    </div>
                    <div className={styles.detail}>
                        <Typography>Description</Typography> <TextArea onChange={onChangeDescription} value={description}/>
                    </div>
                    <div className={styles.detail}>
                        {/* <Typography>Property type</Typography> <Select onChange={onChangePropertyType} value={propertyType}/> */}
                    </div>
                </div>
            )}

            <div className={styles["toggle-icon"]}>
                <IconButton onClick={open ? closeDetails : undefined} iconSrc={open ? ActionClose : Plus}/>
            </div>
        </div>
    )
}

export default Property;