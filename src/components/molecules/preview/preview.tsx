import Button from "components/atoms/button/button";
import Typography from "components/atoms/typography/typography";
import React from "react"
import styles from "./preview.module.css";

type PreviewProps = {

}

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
    return (
        <div className={styles.preview}>
            <Typography variant="h4">Component Preview</Typography>
            <Button>SIGN UP</Button>
        </div>
    )
}

export default Preview;