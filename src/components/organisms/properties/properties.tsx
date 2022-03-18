import Link from "components/atoms/link/link"
import Typography from "components/atoms/typography/typography"
import React from "react"
import styles from "./properties.module.css"
import Plus from "icons/plus.svg";

type PropertiesProps = {

}

const Properties: React.FC<PropertiesProps> = (props: PropertiesProps) => {
    return (
        <div className={styles.properties}>
            <div className={styles.header}>
                <Typography variant="h4">Properties</Typography>

                <Link linkTo="" iconSrc={Plus} iconSize={8} style={{color: "var(--blue-base)"}}>Add new property</Link>
            </div>
        </div>
    )
}

export default Properties;