import React from "react"
import styles from "./input.module.css"

type InputProps = {
    defaultValue?: string
}

const Input: React.FC<InputProps> = ({defaultValue = ""}: InputProps) => {
    const [value, setValue] = React.useState<string>(defaultValue);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <input onChange={onChangeInput} type="text" className={styles.input} value={value}/>
    )
}

export default Input;