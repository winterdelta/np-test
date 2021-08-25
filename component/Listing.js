import React from 'react';
import styles from '../styles/Listing.module.css'
import Image from 'next/image'

export default function Card(props) {
    return (
        <div className={styles.listing}>
            <p>{props.name}</p>
        </div>
    );
}
