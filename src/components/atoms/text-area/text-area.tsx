import React from "react"
import * as CSS from "csstype"
import styles from "./text-area.module.css"
import Typography from "../typography/typography"

type TextAreaProps = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    rows?: number
    hint?: string
    style?: CSS.Properties
}

const TextArea: React.FC<TextAreaProps> = ({value, onChange, rows = 3, hint, style}: TextAreaProps) => {
    return (
        <React.Fragment>
            <textarea onChange={onChange} className={styles["text-area"]} value={value} style={style} rows={rows}/>

            {hint && <div className={styles.hint}><Typography variant="small">{hint}</Typography></div>}
        </React.Fragment>
    )
}

export default TextArea;