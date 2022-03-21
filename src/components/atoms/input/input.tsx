import React from "react"
import * as CSS from "csstype"
import styles from "./input.module.css"

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    placeholder?: string
    style?: CSS.Properties
    className?: string
}

const Input: React.FC<InputProps> = ({onChange, value, placeholder, style, className}: InputProps) => {
    return (
        <input onChange={onChange} type="text" className={`${className ? className : ""} ${styles.input}`} value={value} style={style} placeholder={placeholder}/>
    )
}

export default Input;