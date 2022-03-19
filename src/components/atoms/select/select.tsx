import React from "react"
import * as CSS from "csstype"
import styles from "./select.module.css"
import SVG from "react-inlinesvg"
import Chevron from "icons/chevron.svg"

type SelectProps = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    style?: CSS.Properties
}

const Select: React.FC<SelectProps> = ({value, onChange, style}: SelectProps) => {
    return (
        <div className={styles.select} style={style}>
            <input onChange={onChange} type="text" className={styles.input} value={value} style={style}/>
            <SVG src={Chevron}/>
        </div>
    )
}

export default Select;