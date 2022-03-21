import Input from "components/atoms/input/input"
import Link from "components/atoms/link/link"
import Select from "components/atoms/select/select"
import Switch from "components/atoms/switch/switch"
import TextArea from "components/atoms/text-area/text-area"
import Typography from "components/atoms/typography/typography"
import React from "react"
import { FieldType, HintLinkType, HintTextType, SelectInput, SwitchInput, TextAreaInput, TextInput } from "../../property"
import styles from "./property-field.module.css"

type Props = {
    field: FieldType
    onChange: (fieldName: string, inputIndex: number, value: string | boolean) => void
}

const isTextHint = (hint: HintTextType | HintLinkType): hint is HintTextType => {
    return "text" in hint;
}

const PropertyField = ({field, onChange}: Props) => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputIndex: number) => {
        onChange(field.fieldName, inputIndex, e.target.value);
    }

    const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>, inputIndex: number) => {
        onChange(field.fieldName, inputIndex, e.target.checked);
    }

    const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, inputIndex: number) => {
        onChange(field.fieldName, inputIndex, e.target.value);
    }

    const textInput = (input: TextInput, inputIndex: number) => (
        <Input
            onChange={e => onInputChange(e, inputIndex)}
            value={input.value}
            placeholder={input.placeholder}
            style={{width: `${input.width}px`}}
        />
    )

    const selectInput = (input: SelectInput, inputIndex: number) => (
        <Select
            onChange={e => onInputChange(e, inputIndex)}
            value={input.value}
            style={{width: `${input.width}px`}}
        />
    )

    const switchInput = (input: SwitchInput, inputIndex: number) => (
        <Switch
            onChange={e => onSwitchChange(e, inputIndex)}
            checked={input.value}
            style={{width: `${input.width}px`}}
        />
    )

    const textAreaInput = (input: TextAreaInput, inputIndex: number) => (
        <TextArea
            onChange={e => onTextAreaChange(e, inputIndex)}
            rows={input.rows}
            value={input.value}
            placeholder={input.placeholder}
            style={{width: `${input.width}px`}}
        />
    )

    return (
        <div>
            <div className={styles["property-field-body"]}>
                <Typography>{field.fieldName}</Typography>

                {field.inputs.map((input, index) =>
                    <React.Fragment key={index}>
                        {(() => {
                            switch(input.type) {
                                case "text": return textInput(input, index);
                                case "select": return selectInput(input, index);
                                case "switch": return switchInput(input, index);
                                case "textarea": return textAreaInput(input, index);
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
