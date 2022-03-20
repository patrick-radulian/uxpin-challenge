import Input from "components/atoms/input/input"
import Link from "components/atoms/link/link"
import Select from "components/atoms/select/select"
import Switch from "components/atoms/switch/switch"
import TextArea from "components/atoms/text-area/text-area"
import Typography from "components/atoms/typography/typography"
import React from "react"
import { Field, HintLinkType, HintTextType } from "../../property"
import styles from "./property-field.module.css"

type Props = {
    field: Field
    onChange: (fieldName: string, value: string | boolean) => void
}

const isTextHint = (hint: HintTextType | HintLinkType): hint is HintTextType => {
    return "text" in hint;
}

const PropertyField = ({field, onChange}: Props) => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(field.fieldName, e.target.value);
    }

    const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(field.fieldName, e.target.value);
    }

    const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(field.fieldName, e.target.value);
    }

    return (
        <div className={styles["property-field"]}>
            <div className={styles["property-field-body"]}>
                <Typography>{field.fieldName}</Typography>

                {(() => {
                    switch(field.type) {
                        case "input": return <Input onChange={onInputChange} value={field.value}/>;
                        case "select": return <Select onChange={onInputChange} value={field.value}/>;
                        case "switch": return <Switch onChange={onSwitchChange} value={field.value}/>;
                        case "textarea": return <TextArea onChange={onTextAreaChange} rows={field.rows} value={field.value}/>
                    }
                })()}
            </div>

            {field.hint && field.hint.map((hintSection, index) => {
                if (isTextHint(hintSection)) {
                    return <Typography variant="small" key={index}>{hintSection.text}</Typography>
                }

                return <Link linkTo={hintSection.linkTo} key={index}>
                    <Typography variant="small">{hintSection.linkText}</Typography>
                </Link>
            })}
        </div>
    )
}


export default PropertyField;
