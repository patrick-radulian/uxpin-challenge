const mockData = [
    {
        name: "Color",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{ type: "text", value: "Color" }]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "one of"}]
            },
            {
                fieldName: "Property control",
                inputs: [{type: "select", value: "select"}]
            },
            {
                fieldName: "Options",
                inputs: [{type: "textarea", value: "default, inherit, primary, secondary", rows: 2}],
                hint: [{text: "(list options separared by comma)"}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "select", value: "primary"}]
            }
        ],
        disabled: false
    },
    {
        name: "Children",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{type: "text", value: "Children"}]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "node"}]
            },
            {
                fieldName: "Property control",
                inputs: [{type: "select", value: "textarea"}, {type: "text", value: "", placeholder: "rows", width: 38}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "textarea", value: ""}]
            }
        ],
        disabled: false
    },
    {
        name: "Disabled",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{type: "text", value: "Disabled"}]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "boolean"}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "switch", value: true}]
            }
        ],
        disabled: false
    },
    {
        name: "Disable focus ripple",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{type: "text", value: "Disable focus ripple"}]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "boolean"}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "switch", value: true}]
            }
        ],
        disabled: true
    },
    {
        name: "Disable ripple",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{type: "text", value: "Color"}]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "boolean"}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "switch", value: true}]
            }
        ],
        disabled: true
    },
    {
        name: "Full width",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{type: "text", value: "Full width"}]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "boolean"}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "switch", value: true}]
            }
        ],
        disabled: false
    },
    {
        name: "Mini",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{type: "text", value: "Mini"}]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "boolean"}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "switch", value: false}]
            }
        ],
        disabled: false
    },
    {
        name: "Size",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{type: "text", value: "Size"}]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "one of"}]
            },
            {
                fieldName: "Options",
                inputs: [{type: "textarea", rows: 2, value: "default, small, medium, large"}],
                hint: [{text: "(list options separared by comma)"}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "select", value: "large"}]
            }
        ],
        disabled: false
    },
    {
        name: "Variant",
        fields: [
            {
                fieldName: "Property name",
                inputs: [{type: "text", value: "Variant"}]
            },
            {
                fieldName: "Display name",
                inputs: [{type: "text", value: ""}]
            },
            {
                fieldName: "Description",
                inputs: [{type: "textarea", rows: 3, value: ""}]
            },
            {
                fieldName: "Property type",
                inputs: [{type: "select", value: "one of"}]
            },
            {
                fieldName: "Property control",
                inputs: [{type: "select", value: "select"}]
            },
            {
                fieldName: "Options",
                inputs: [{type: "textarea", rows: 2, value: "default, text, outlained, contained"}],
                hint: [{text: "(list options separared by comma)"}]
            },
            {
                fieldName: "Default value",
                inputs: [{type: "select", value: "contained"}]
            }
        ],
        disabled: false
    }
]

export default mockData;