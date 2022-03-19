const mockData = [
    {
        name: "Color",
        fields: [
            { field: "Property name", type: "input", value: "Color" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "one of" },
            { field: "Property control", type: "select", value: "select" },
            { field: "Options", type: "textarea", value: "default, inherit, primary, secondary" },
            { field: "Default value", type: "select", value: "primary" }
        ],
        disabled: false
    },
    {
        name: "Children",
        fields: [
            { field: "Property name", type: "input", value: "Children" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "node" },
            { field: "Property control", type: "select", value: "textarea" },
            { field: "Default value", type: "textarea", value: "" }
        ],
        disabled: false
    },
    {
        name: "Disabled",
        fields: [
            { field: "Property name", type: "input", value: "Disabled" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "boolean" },
            { field: "Default value", type: "switch", value: true }
        ],
        disabled: false
    },
    {
        name: "Disable focus ripple",
        fields: [
            { field: "Property name", type: "input", value: "Disable focus ripple" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "boolean" },
            { field: "Default value", type: "switch", value: true }
        ],
        disabled: false
    },
    {
        name: "Disable ripple",
        fields: [
            { field: "Property name", type: "input", value: "Color" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "boolean" },
            { field: "Default value", type: "switch", value: true }
        ],
        disabled: true
    },
    {
        name: "Full width",
        fields: [
            { field: "Property name", type: "input", value: "Full width" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "boolean" },
            { field: "Default value", type: "switch", value: true }
        ],
        disabled: false
    },
    {
        name: "Mini",
        fields: [
            { field: "Property name", type: "input", value: "Mini" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "boolean" },
            { field: "Default value", type: "switch", value: false }
        ],
        disabled: false
    },
    {
        name: "Size",
        fields: [
            { field: "Property name", type: "input", value: "Size" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "one of" },
            { field: "Options", type: "textarea", value: "default, small, medium, large" },
            { field: "Default value", type: "select", value: "large" }
        ],
        disabled: false
    },
    {
        name: "Variant",
        fields: [
            { field: "Property name", type: "input", value: "Variant" },
            { field: "Display name", type: "input", value: "" },
            { field: "Description", type: "textarea", value: "" },
            { field: "Property type", type: "select", value: "one of" },
            { field: "Property control", type: "select", value: "select" },
            { field: "Options", type: "textarea", value: "default, text, outlained, contained" },
            { field: "Default value", type: "select", value: "contained" }
        ],
        disabled: false
    }
]

export default mockData;