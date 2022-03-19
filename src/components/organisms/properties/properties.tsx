import Link from "components/atoms/link/link"
import Typography from "components/atoms/typography/typography"
import React from "react"
import styles from "./properties.module.css"
import Plus from "icons/plus.svg";
import Property, { Field } from "components/molecules/property/property";
import NewProperty from "components/molecules/new-property/new-property";

type PropertiesType = {
    [key: string]: {
        fields: Array<Field>
        disabled: boolean
    }
}

const Properties: React.FC<{}> = () => {
    const [newPropertyVisibility, setNewPropertyVisibility] = React.useState<boolean>(true);
    const [properties, setProperties] = React.useState<PropertiesType>({});

    const fetchMockData = React.useCallback(async () => {
        const data = await import("../../../mock-data/properties");
        const json = data.default as PropertiesType;

        console.log(json);
        setProperties(json);
    }, []);

    React.useEffect(() => {
        fetchMockData();
    }, [fetchMockData]);

    const showNewPropertyForm = () => setNewPropertyVisibility(true);

    const onChange = (property: string, fieldName: string, value: string | boolean) => {
        const fieldIndex = properties[property].fields.findIndex(f => f.fieldName === fieldName);
        const fields = properties[property].fields.slice();
        fields[fieldIndex].value = value;

        setProperties(() => {
            return {
                ...properties,
                [property]: {
                    ...properties[property],
                    fields
                }
            }
        })
    }

    return (
        <div className={styles.properties}>
            <div className={styles.header}>
                <Typography variant="h4">Properties</Typography>

                <Link iconSrc={Plus} iconWidth={7} iconHeight={8} onClick={showNewPropertyForm} style={{color: "var(--blue-base)", marginBottom: "2px"}}>
                    Add new property
                </Link>
            </div>

            {newPropertyVisibility && <NewProperty/>}

            <div className={styles.list}>
                {Object.keys(properties).map((property, index) => (
                    <Property
                        propertyName={property}
                        fields={properties[property].fields}
                        onChange={onChange}
                        disabled={properties[property].disabled}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Properties;