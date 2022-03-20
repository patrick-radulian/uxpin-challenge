import React from "react"
import Separator from "../separator/separator"
import styles from "./switch.module.css"

type SwitchProps = {
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Switch: React.FC<SwitchProps> = ({checked, onChange}: SwitchProps) => {
    return (
        <div className={styles.switch}>
            <input onChange={onChange} type="checkbox" checked={checked}/>
            <div className={`${styles["switch-value"]} ${checked ? "checked" : ""}`}>True</div>
            <Separator vertical/>
            <div className={`${styles["switch-value"]} ${!checked ? "checked" : ""}`}>False</div>
        </div>
    )
}

export default Switch;