import React from "react"
import styles from "./tab.module.css"

type TabProps = {
    active: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    label?: string | number
    icon?: React.ReactElement
    iconPosition?: "start" | "end"
}

const Tab: React.FC<TabProps> = ({active, onClick, label, icon, iconPosition = "start"}: TabProps) => {
    return (
        <button className={`${styles.tab} ${active ? "active" : ""}`} onClick={onClick}>
            {icon && iconPosition === "start" && icon}
            <span>{label}</span>
        </button>
    )
}

export default Tab;