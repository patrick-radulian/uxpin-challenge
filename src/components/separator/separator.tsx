import React from 'react';
import styles from "./separator.module.css";

type SeparatorProps = {
    style?: React.CSSProperties
}

const Separator: React.FC<SeparatorProps> = (props: SeparatorProps) => {
    return (
        <hr className={styles.separator} style={props.style}/>
    )
}

export default Separator;