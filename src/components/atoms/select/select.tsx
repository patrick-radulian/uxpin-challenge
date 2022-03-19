import React from "react"
import * as CSS from "csstype"
import SVG from "react-inlinesvg"
import Chevron from "icons/chevron.svg"
import styles from "./select.module.css"
import Input from "../input/input"

type SelectProps = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    style?: CSS.Properties
}

const Select: React.FC<SelectProps> = ({value, onChange, style}: SelectProps) => {
    return (
        <div className={styles.select}>
            <Input onChange={onChange} value={value}/>
            <SVG src={Chevron}/>
        </div>
    )
}

export default Select;