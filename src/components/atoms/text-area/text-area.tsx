import React from "react"
import * as CSS from "csstype"
import styles from "./text-area.module.css"

type TextAreaProps = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    style?: CSS.Properties
}

const TextArea: React.FC<TextAreaProps> = ({value, onChange, style}: TextAreaProps) => {
    return (
        <textarea onChange={onChange} className={styles["text-area"]} value={value} style={style}/>
    )
}

export default TextArea;