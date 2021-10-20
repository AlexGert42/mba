import React from "react";
import styles from "./Loader.module.scss";
import loader_icon from "../../../assets/loader_icon.svg"

export const Loader: React.FC = () => {

    return (
        <div className={styles.loader}>
            <div className={styles.loader__spinner}>
                <img src={loader_icon} alt=" "/>
                <p className={styles.loader__text}>Loading...</p>
            </div>
        </div>
    )
}