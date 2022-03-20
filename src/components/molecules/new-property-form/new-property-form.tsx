import React from "react"
import styles from "./new-property-form.module.css"
import PropertyBody from "../property/property-body/property-body"
import Separator from "components/atoms/separator/separator"
import Link from "components/atoms/link/link"
import Button from "components/atoms/button/button"
import { PropertyType } from "components/organisms/properties/properties"

type NewPropertyProps = {
    onAdd: (property: PropertyType) => void
}

const newProperty: PropertyType = {
    name: "",
    fields: [
        { fieldName: "Property name", type: "input", value: "", hint: "(name of the property given in code)" },
        { fieldName: "Display name", type: "input", value: "" },
        { fieldName: "Description", type: "textarea", value: "" },
        { fieldName: "Property type", type: "select", value: "one of" },
        { fieldName: "Property control", type: "select", value: "", hint: "(type of control displayed in editor's properties panel. Learn more about control types)" },
        { fieldName: "Options", type: "textarea", rows: 2, value: "", hint: "(list options sapafared by comma)" },
        { fieldName: "Default value", type: "select", value: "" }
    ],
    disabled: false
}

const NewPropertyForm: React.FC<NewPropertyProps> = ({onAdd}: NewPropertyProps) => {
    const [property, setProperty] = React.useState<PropertyType>(newProperty);

    const onChange = (fieldName: string, value: string | boolean) => {
        setProperty(() => {
            return {
                ...property,
                fields: [
                    ...property.fields.map(field => {
                        if (field.fieldName === fieldName) {
                            return { ...field, value: value as any }
                        }

                        return field;
                    })
                ]
            }
        })
    }

    const onClickAdd = (e: React.MouseEvent<HTMLButtonElement>) => onAdd(property);

    return (
        <div>
            <PropertyBody fields={property.fields} onChange={onChange}/>

            <div className={styles.actions}>
                <Link>Cancel</Link>
                <Button onClick={onClickAdd}>Add</Button>
            </div>

            <Separator/>
        </div>
    )
}

export default NewPropertyForm;