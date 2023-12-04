import React, { useEffect, useState } from 'react';
import styles from '../css/Footer.module.css';

function Footer() {

    return (
        <div className={styles['footer']}>
            <div className={styles['label']}>COTEIS</div>
            <div className={styles['label']}>© 2023 COTEIS. All Rights Reserved.</div>
        </div>
    );
}

export default Footer;