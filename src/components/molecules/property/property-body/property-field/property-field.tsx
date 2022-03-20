import Input from "components/atoms/input/input"
import Link from "components/atoms/link/link"
import Select from "components/atoms/select/select"
import Switch from "components/atoms/switch/switch"
import TextArea from "components/atoms/text-area/text-area"
import Typography from "components/atoms/typography/typography"
import React from "react"
import { FieldType, HintLinkType, HintTextType } from "../../property"
import styles from "./property-field.module.css"

type Props = {
    field: FieldType
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
        onChange(field.fieldName, e.target.checked);
    }

    const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(field.fieldName, e.target.value);
    }

    return (
        <div className={styles["property-field"]}>
            <div className={styles["property-field-body"]}>
                <Typography>{field.fieldName}</Typography>

                {field.inputs.map((input, index) =>
                    <React.Fragment key={index}>
                        {(() => {
                            switch(input.type) {
                                case "text": return <Input onChange={onInputChange} value={input.value} placeholder={input.placeholder} style={{width: `${input.width}px`}}/>;
                                case "select": return <Select onChange={onInputChange} value={input.value} style={{width: `${input.width}px`}}/>;
                                case "switch": return <Switch onChange={onSwitchChange} checked={input.value} style={{width: `${input.width}px`}}/>;
                                case "textarea": return <TextArea onChange={onTextAreaChange} rows={input.rows} value={input.value} placeholder={input.placeholder} style={{width: `${input.width}px`}}/>
                            }
                        })()}
                    </React.Fragment>
                )}
            </div>

            {field.hint && field.hint.map((hintSection, index) => {
                if (isTextHint(hintSection)) {
                    return <Typography variant="small" key={index}>{hintSection.text}</Typography>
                }

                return <Link href={hintSection.href} key={index}>
                    <Typography variant="small" style={{color: "inherit"}}>{hintSection.linkText}</Typography>
                </Link>
            })}
        </div>
    )
}


export default PropertyField;
