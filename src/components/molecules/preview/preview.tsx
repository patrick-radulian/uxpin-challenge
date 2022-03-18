import MaterialButton from "components/atoms/material-button/material-button";
import Typography from "components/atoms/typography/typography";
import React from "react"
import styles from "./preview.module.css";

const Preview: React.FC<{}> = () => {
    return (
        <div className={styles.preview}>
            <Typography variant="h4">Component Preview</Typography>
            <MaterialButton size="large" fullWidth>SIGN UP</MaterialButton>
        </div>
    )
}

export default Preview;