import React from "react"
import * as CSS from "csstype"
import styles from "./input.module.css"

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    style?: CSS.Properties
}

const Input: React.FC<InputProps> = ({onChange, value, style}: InputProps) => {
    return (
        <input onChange={onChange} type="text" className={styles.input} value={value} style={style}/>
    )
}

export default Input;