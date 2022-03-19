import React from "react"
import styles from "./switch.module.css"

type SwitchProps = {
    value: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
    return (
        <div className={styles.switch}>
            <input type="checkbox"/>
        </div>
    )
}

export default Switch;