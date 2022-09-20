import { useLocation } from 'react-router-dom';
import React from 'react';

import styles from "./NotFoundPage.css";

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <h1 className={styles.text}>Not found</h1>
            <p>No match for <u>{location.pathname}</u></p>
        </>
    )
}
export default NotFoundPage;



