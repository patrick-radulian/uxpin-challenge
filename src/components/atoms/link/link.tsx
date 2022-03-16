import React from "react";
import styles from "./link.module.css";

type LinkProps = {
    children: React.ReactElement | string
    linkTo: string
}

const Link: React.FC<LinkProps> = (props: LinkProps) => {
    return (
        <a className={styles.link} href={props.linkTo}>
            <span>{props.children}</span>
            <div className={styles["link-decoration"]}></div>
        </a>
    )
}

export default Link;