const mockData = [
    {
        name: "Color",
        fields: [
            { fieldName: "Property name", type: "input", value: "Color" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "one of" },
            { fieldName: "Property control", type: "select", value: "select" },
            { fieldName: "Options", type: "textarea", hint: [{text: "(list options separared by comma)"}], rows: 2, value: "default, inherit, primary, secondary" },
            { fieldName: "Default value", type: "select", value: "primary" }
        ],
        disabled: false
    },
    {
        name: "Children",
        fields: [
            { fieldName: "Property name", type: "input", value: "Children" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "node" },
            { fieldName: "Property control", type: "select", value: "textarea" },
            { fieldName: "Default value", type: "textarea", value: "" }
        ],
        disabled: false
    },
    {
        name: "Disabled",
        fields: [
            { fieldName: "Property name", type: "input", value: "Disabled" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "boolean" },
            { fieldName: "Default value", type: "switch", value: true }
        ],
        disabled: false
    },
    {
        name: "Disable focus ripple",
        fields: [
            { fieldName: "Property name", type: "input", value: "Disable focus ripple" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "boolean" },
            { fieldName: "Default value", type: "switch", value: true }
        ],
        disabled: true
    },
    {
        name: "Disable ripple",
        fields: [
            { fieldName: "Property name", type: "input", value: "Color" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "boolean" },
            { fieldName: "Default value", type: "switch", value: true }
        ],
        disabled: true
    },
    {
        name: "Full width",
        fields: [
            { fieldName: "Property name", type: "input", value: "Full width" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "boolean" },
            { fieldName: "Default value", type: "switch", value: true }
        ],
        disabled: false
    },
    {
        name: "Mini",
        fields: [
            { fieldName: "Property name", type: "input", value: "Mini" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "boolean" },
            { fieldName: "Default value", type: "switch", value: false }
        ],
        disabled: false
    },
    {
        name: "Size",
        fields: [
            { fieldName: "Property name", type: "input", value: "Size" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "one of" },
            { fieldName: "Options", type: "textarea", hint: [{text: "(list options separared by comma)"}], rows: 2, value: "default, small, medium, large" },
            { fieldName: "Default value", type: "select", value: "large" }
        ],
        disabled: false
    },
    {
        name: "Variant",
        fields: [
            { fieldName: "Property name", type: "input", value: "Variant" },
            { fieldName: "Display name", type: "input", value: "" },
            { fieldName: "Description", type: "textarea", rows: 3, value: "" },
            { fieldName: "Property type", type: "select", value: "one of" },
            { fieldName: "Property control", type: "select", value: "select" },
            { fieldName: "Options", type: "textarea", hint: [{text: "(list options separared by comma)"}], rows: 2, value: "default, text, outlained, contained" },
            { fieldName: "Default value", type: "select", value: "contained" }
        ],
        disabled: false
    }
]

export default mockData;