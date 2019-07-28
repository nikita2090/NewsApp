import React from 'react';

import styles from './Preloader.module.css';

const Preloader = () => (
    <div className={styles.preloader}>
        <img src="./placeholder.svg"
             alt='loading...'/>
    </div>
);

export default Preloader;