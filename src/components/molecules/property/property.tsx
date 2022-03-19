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
import PropertyField from "./property-field/property-field";

type BaseType = { fieldName: string, hint?: string }

type InputType = BaseType & { type: "input", value: string }

type TextAreaType = BaseType & { type: "textarea", rows: number, value: string }

type SelectType = BaseType & { type: "select", value: string }

type SwitchType = BaseType & { type: "switch", value: boolean }

export type Field = InputType | TextAreaType | SelectType | SwitchType

export type PropertyProps = {
    propertyName: string
    fields: Array<Field>
    onChange: (property: string, fieldName: string, value: string | boolean) => void
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

            {open && (
                <div className={styles.fields}>
                    {fields.map((field, index) => (
                        <PropertyField field={field} onChange={onPropertyChange} key={index}/>
                    ))}
                </div>
            )}

            <IconButton onClick={open ? closeDetails : undefined} iconSrc={open ? ActionClose : Plus}/>
        </div>
    )
}

export default Property;