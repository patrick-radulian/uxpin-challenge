import React from "react"
import styles from "./new-property-form.module.css"
import { Field } from "../property/property"
import PropertyBody from "../property/property-body/property-body"
import Separator from "components/atoms/separator/separator"
import Link from "components/atoms/link/link"
import Button from "components/atoms/button/button"
import { PropertiesType } from "components/organisms/properties/properties"

type NewPropertyProps = {
    onAdd: (property: PropertiesType) => void
}

const newPropertyFields: Array<Field> = [
    { fieldName: "Property name", type: "input", value: "", hint: "(name of the property given in code)" },
    { fieldName: "Display name", type: "input", value: "" },
    { fieldName: "Description", type: "textarea", value: "" },
    { fieldName: "Property type", type: "select", value: "one of" },
    { fieldName: "Property control", type: "select", value: "", hint: "(type of control displayed in editor's properties panel. Learn more about control types)" },
    { fieldName: "Options", type: "textarea", rows: 2, value: "", hint: "(list options sapafared by comma)" },
    { fieldName: "Default value", type: "select", value: "" }
]

const newProperty: PropertiesType = {
    "": {
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
}

const NewPropertyForm: React.FC<NewPropertyProps> = ({onAdd}: NewPropertyProps) => {
    const [property, setProperty] = React.useState<PropertiesType>(newProperty);

    const onChange = (fieldName: string, value: string | boolean) => {
        const currentPropertyName = Object.keys(property)[0];

        if (fieldName === "Property name") {
            const newField = { [currentPropertyName + (value as string)]: { ...property[currentPropertyName]}}

            setProperty(() => newField)
        } else {
            setProperty(() => {
                return {
                    [currentPropertyName]: {
                        ...property[currentPropertyName],
                        fields: [
                            ...property[currentPropertyName].fields.map(field => {
                                if (field.fieldName === fieldName) {
                                    return { ...field, value: value as any }
                                }

                                return field;
                            })
                        ]
                    }
                }
            })
        }
    }

    const onClickAdd = (e: React.MouseEvent<HTMLButtonElement>) => onAdd(property);

    return (
        <div>
            <PropertyBody fields={newPropertyFields} onChange={onChange}/>

            <div className={styles.actions}>
                <Link>Cancel</Link>
                <Button onClick={onClickAdd}>Add</Button>
            </div>

            <Separator/>
        </div>
    )
}

export default NewPropertyForm;