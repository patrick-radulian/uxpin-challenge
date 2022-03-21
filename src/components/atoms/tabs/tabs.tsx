import React from "react"
import Tab from "../tab/tab"
import styles from "./tabs.module.css"

export type TabType = {
    label?: string
    icon?: React.ReactElement
    iconPosition?: "start" | "end"
}

type TabsProps = {
    tabs: Array<TabType>
    activeTab: number
    onChange: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void
}


const Tabs: React.FC<TabsProps> = ({tabs, activeTab, onChange}: TabsProps) => {
    const onClick = (e: React.MouseEvent<HTMLButtonElement>, index: number) => onChange(e, index);

    return (
        <div className={styles.tabs}>
            {tabs.map((tab: TabType, index: number) => (
                <Tab label={tab.label} onClick={e => onClick(e, index)} icon={tab.icon} iconPosition={tab.iconPosition} active={index === activeTab}/>
            ))}
        </div>
    )
}

export default Tabs;