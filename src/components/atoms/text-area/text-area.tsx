import React from "react"
import styles from "./text-area.module.css"

type TextAreaProps = {
    defaultValue?: string
}

const TextArea: React.FC<TextAreaProps> = ({defaultValue = ""}: TextAreaProps) => {
    const [value, setValue] = React.useState<string>(defaultValue);

    const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

    return (
        <textarea onChange={onChangeInput} className={styles["text-area"]} value={value}/>
    )
}

export default TextArea;