import Link from "components/atoms/link/link"
import Typography from "components/atoms/typography/typography"
import React from "react"
import styles from "./properties.module.css"
import Plus from "icons/plus.svg";
import Property, { PropertyProps } from "components/molecules/property/property";


const Properties: React.FC<{}> = () => {
    const [properties, setProperties] = React.useState<Array<PropertyProps>>([]);

    const fetchMockData = React.useCallback(async () => {
        const data = await import("../../../mock-data/properties");
        const json = data.default as Array<PropertyProps>;

        console.log(json);
        setProperties(json);
    }, []);

    React.useEffect(() => {
        fetchMockData();
    }, [fetchMockData]);

    return (
        <div className={styles.properties}>
            <div className={styles.header}>
                <Typography variant="h4">Properties</Typography>

                <Link linkTo="" iconSrc={Plus} iconWidth={7} iconHeight={8} style={{color: "var(--blue-base)", marginBottom: "2px"}}>Add new property</Link>
            </div>

            <div className={styles.list}>
                {properties.map(property => <Property name={property.name} fields={property.fields} disabled={property.disabled}/>)}
            </div>
        </div>
    )
}

export default Properties;