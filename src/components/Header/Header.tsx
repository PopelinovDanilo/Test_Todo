import React from "react";
import styles from "./Header.module.css";

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (

    <div className={styles.header_container}>
        <div className={styles.header_title}>
            Todolist <b>{todoCount}</b> task(s)
        </div>

    </div>
);