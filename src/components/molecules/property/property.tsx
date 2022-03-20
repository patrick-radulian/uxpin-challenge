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
import PropertyBody from "./property-body/property-body";

export type HintTextType = { text: string }
export type HintLinkType = { linkText: string, href: string }

type BaseType = { width?: number }
type TextInput = BaseType & { type: "text", value: string, placeholder?: string }
type TextAreaInput = BaseType & { type: "textarea", value: string, rows?: number, placeholder?: string }
type SelectInput = BaseType & { type: "select", value: string }
type SwitchInput = BaseType & { type: "switch", value: boolean }

type FieldInput = TextInput | TextAreaInput | SelectInput | SwitchInput

export type FieldType = { fieldName: string, inputs: Array<FieldInput>, hint?: Array<HintTextType | HintLinkType> }

export type PropertyProps = {
    propertyName: string
    fields: Array<FieldType>
    onChange: (propertyName: string, fieldName: string, value: string | boolean) => void
    disabled: boolean
}

const IconButtonWithTooltip = withTooltip(IconButton);

const Property: React.FC<PropertyProps> = ({propertyName, fields, onChange, disabled}: PropertyProps) => {
    const [open, setOpened] = React.useState<boolean>(false);

    const openDetails = () => setOpened(true);

    const closeDetails = () => setOpened(false);

    const onPropertyChange = (fieldName: string, value: string | boolean) => {
        onChange(propertyName, fieldName, value);
    }

    return (
        <div onClick={open ? undefined : openDetails} className={`${styles.property} ${open ? "open" : ""} ${disabled ? "disabled" : ""}`}>
            <div className={styles.label}>
                <Typography className={styles.name} variant="h6">{propertyName}</Typography>
                <IconButtonWithTooltip iconSrc={disabled ? VisibilityHidden : VisibilityVisible} tooltip={open ? "Hide property" : ""}/>
                {open && <IconButtonWithTooltip iconSrc={Trash} tooltip={open ? "Delete property" : ""}/>}
            </div>

            {open && <PropertyBody fields={fields} onChange={onPropertyChange} disabled={disabled}/>}

            <IconButton onClick={open ? closeDetails : undefined} iconSrc={open ? ActionClose : Plus} className={styles.action}/>
        </div>
    )
}

export default Property;