import React from "react";
import styles from "./breadcrumbs.module.css";

type BreadcrumbsProps = {
    crumbs: Array<string>
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
    return (
        <div>
            {props.crumbs.map((crumb, index, array) => (
                <React.Fragment key={crumb}>
                    <span className={styles.crumb}>{crumb}</span>
                    {index < array.length - 1 && <span className={styles["crumb-separator"]}>/</span>}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Breadcrumbs;