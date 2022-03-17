import React from "react"
import styles from "./properties.module.css"

type PropertiesProps = {

}

const Properties: React.FC<PropertiesProps> = (props: PropertiesProps) => {
    return (
        <div className={styles.properties}>
            <div className={styles.header}></div>
        </div>
    )
}

export default Properties;