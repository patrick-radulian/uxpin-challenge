import React from "react"
import styles from "./new-property-form.module.css"
import PropertyBody from "../property/property-body/property-body"
import Separator from "components/atoms/separator/separator"
import Link from "components/atoms/link/link"
import Button from "components/atoms/button/button"
import { PropertyType } from "components/organisms/properties/properties"

type NewPropertyProps = {
    onClose: () => void
    onAdd: (property: PropertyType) => void
}

const newProperty: PropertyType = {
    name: "",
    fields: [
        {
            fieldName: "Property name",
            inputs: [{type: "text", value: ""}],
            hint: [{text: "(name of the proerty given in code)"}] },
        {
            fieldName: "Display name",
            inputs: [{type: "text", value: ""}] },
        {
            fieldName: "Description",
            inputs: [{type: "textarea", value: ""}] },
        {
            fieldName: "Propety type",
            inputs: [{type: "select", value: "one of"}] },
        {
            fieldName: "Property control",
            inputs: [{type: "select", value: ""}],
            hint: [{text: "(type of control displayed in editor's properties panel. "}, {linkText: "Learn more ", href: ""}, {text: "about control types)"}]
        },
        {
            fieldName: "Options",
            inputs: [{type: "textarea", rows: 2, value: ""}],
            hint: [{text: "(list options sepafared by comma)"}] },
        {
            fieldName: "Default value",
            inputs: [{type: "select", value: ""}]
        }
    ],
    disabled: false
}



const NewPropertyForm: React.FC<NewPropertyProps> = ({onClose, onAdd}: NewPropertyProps) => {
    const [property, setProperty] = React.useState<PropertyType>(newProperty);

    const onChange = (fieldName: string, inputIndex: number, value: string | boolean) => {
        setProperty(() => {
            return {
                ...property,
                name: fieldName === "Property name" ? (value as string) : property.name,
                fields: [
                    ...property.fields.map(field => {
                        if (field.fieldName === fieldName) {
                            return {
                                ...field,
                                inputs: field.inputs.map((input, index) => {
                                    if (index === inputIndex) {
                                        return {
                                            ...input,
                                            value: value as any
                                        }
                                    }

                                    return input;
                                })
                            }
                        }

                        return field;
                    })
                ]
            }
        })
    }

    const onCancel = (e: React.MouseEvent<HTMLAnchorElement>) => onClose();

    const onClickAdd = (e: React.MouseEvent<HTMLButtonElement>) => onAdd(property);

    return (
        <div className={styles["new-property"]}>
            <PropertyBody fields={property.fields} onChange={onChange}/>

            <div className={styles.actions}>
                <Link onClick={onCancel} href="#">Cancel</Link>
                <Button onClick={onClickAdd}>Add</Button>
            </div>

            <Separator/>
        </div>
    )
}

export default NewPropertyForm;