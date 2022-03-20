import React from "react"
import * as CSS from "csstype"
import styles from "./text-area.module.css"

type TextAreaProps = {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    value?: string
    placeholder?: string
    rows?: number
    style?: CSS.Properties
}

const TextArea: React.FC<TextAreaProps> = ({onChange, value, placeholder, rows = 3, style}: TextAreaProps) => {
    return (
        <React.Fragment>
            <textarea onChange={onChange} className={styles["text-area"]} value={value} style={style} rows={rows} placeholder={placeholder}/>
        </React.Fragment>
    )
}

export default TextArea;