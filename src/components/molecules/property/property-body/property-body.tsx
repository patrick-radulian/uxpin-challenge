import React from "react"
import styles from "./property-body.module.css";
import { FieldType } from "../property"
import PropertyField from "./property-field/property-field";

type PropertyBodyProps = {
    fields: Array<FieldType>
    onChange: (fieldName: string, inputIndex: number, value: string | boolean) => void
    disabled?: boolean
}

const PropertyBody: React.FC<PropertyBodyProps> = ({fields, onChange, disabled}: PropertyBodyProps) => {
    return (
        <div className={`${styles.fields} ${disabled ? "disabled" : ""}`}>
            {fields.map((field, index) => (
                <PropertyField field={field} onChange={onChange} key={index}/>
            ))}
        </div>
    )
}

export default PropertyBody;