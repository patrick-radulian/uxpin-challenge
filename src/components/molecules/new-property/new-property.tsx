import React from "react"
import styles from "./new-property.module.css"
import { Field } from "../property/property"
import PropertyBody from "../property/property-body/property-body"
import Separator from "components/atoms/separator/separator"
import Link from "components/atoms/link/link"
import Button from "components/atoms/button/button"

type NewPropertyProps = {

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

const NewProperty: React.FC<NewPropertyProps> = (props: NewPropertyProps) => {
    const onChange = () => {

    }

    return (
        <div>
            <PropertyBody fields={newPropertyFields} onChange={onChange}/>

            <div className={styles.actions}>
                <Link>Cancel</Link>
                <Button>Add</Button>
            </div>

            <Separator/>
        </div>
    )
}

export default NewProperty;