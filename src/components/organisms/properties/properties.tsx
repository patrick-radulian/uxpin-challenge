import Link from "components/atoms/link/link"
import Typography from "components/atoms/typography/typography"
import React from "react"
import styles from "./properties.module.css"
import Plus from "icons/plus.svg";
import Property from "components/molecules/property/property";

type PropertiesProps = {

}

const Properties: React.FC<PropertiesProps> = (props: PropertiesProps) => {
    return (
        <div className={styles.properties}>
            <div className={styles.header}>
                <Typography variant="h4">Properties</Typography>

                <Link linkTo="" iconSrc={Plus} iconWidth={7} iconHeight={8} style={{color: "var(--blue-base)", marginBottom: "2px"}}>Add new property</Link>
            </div>

            <div className={styles.list}>
                <Property name="Color"/>
                <Property name="Children"/>
                <Property name="Disabled"/>
                <Property name="Disable focus ripple" disabled/>
                <Property name="Disable ripple" disabled/>
                <Property name="Full width"/>
                <Property name="Mini"/>
                <Property name="Size"/>
                <Property name="Variant"/>
            </div>
        </div>
    )
}

export default Properties;