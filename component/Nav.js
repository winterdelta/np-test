import React from 'react';
import Image from 'next/image';
import styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.logo} />
            <div className={styles.logoUK} />
        </div>
    );
}
