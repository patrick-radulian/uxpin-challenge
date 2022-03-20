import Link from "components/atoms/link/link"
import Typography from "components/atoms/typography/typography"
import React from "react"
import styles from "./properties.module.css"
import Plus from "icons/plus.svg";
import Property, { Field } from "components/molecules/property/property";
import NewPropertyForm from "components/molecules/new-property-form/new-property-form";

export type PropertiesType = {
    [key: string]: {
        fields: Array<Field>
        disabled: boolean
    }
}

type PropertiesProps = {
    sort?: "asc" | "desc"
}

const Properties: React.FC<PropertiesProps> = ({sort}: PropertiesProps) => {
    const [newPropertyVisibility, setNewPropertyVisibility] = React.useState<boolean>(false);
    const [properties, setProperties] = React.useState<PropertiesType>({});

    const fetchMockData = React.useCallback(async () => {
        const data = await import("../../../mock-data/properties");
        const json = data.default as PropertiesType;

        setProperties(json);
    }, []);

    React.useEffect(() => {
        fetchMockData();
    }, [fetchMockData]);

    const showNewPropertyForm = () => setNewPropertyVisibility(true);

    const onChange = (property: string, fieldName: string, value: string | boolean) => {
        setProperties(() => {
            return {
                ...properties,
                [property]: {
                    ...properties[property],
                    fields: [
                        ...properties[property].fields.map(field => {
                            if (field.fieldName === fieldName) {
                                return { ...field, value: value as any }
                            }

                            return field;
                        })
                    ]
                }
            }
        })
    }

    const onAddProperty = (property: PropertiesType) => {
        console.log(property);
    }

    const sortProperties = (a: string, b: string) => {
        return (a < b ? -1 : 1) * (sort === "desc" ? -1 : 1);
    }

    return (
        <div className={styles.properties}>
            <div className={styles.header}>
                <Typography variant="h4">Properties</Typography>

                <Link iconSrc={Plus} iconWidth={7} iconHeight={8} onClick={showNewPropertyForm} style={{color: "var(--blue-base)", marginBottom: "2px"}}>
                    Add new property
                </Link>
            </div>

            {newPropertyVisibility && <NewPropertyForm onAdd={onAddProperty}/>}

            <div className={styles.list}>
                {Object.keys(properties).sort(sortProperties).map((property, index) => (
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