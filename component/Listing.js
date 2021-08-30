import React from 'react';
import styles from '../styles/Listing.module.css'
import Image from 'next/image'

export default function Card(props) {
    return (
        <div className={styles.listing}>
            <div className={styles.container}>
                <Image className={styles.carImage} src={props.image} height={250} width={333} />
                <div className={styles.tags}><div className={styles.used}>Used</div></div>
                <div className={styles.spec}>
                    <div className={styles.spectag}>
                        <div className={styles.text}>32k Miles</div>
                    </div>
                    <div className={styles.spectag}>
                        <div className={styles.text}>Hybrid</div>
                    </div>
                    <div className={styles.spectag}>
                        <div className={styles.text}>Manual</div>
                    </div>
                    <div className={styles.spectag}>
                        <div className={styles.text}>SUV</div>
                    </div>
                </div>
            </div>
            <div className={styles.heading}>
                <div>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.carType}>CLA 250e Coupe Shooting Break</div>
                </div>
                {/* <Image className={styles.star} src='/Star.png' height={15} width={15} /> */}
            </div>
            <div className={styles.pricing}>
                <div className={styles.price}>
                    £550.90<span className={styles.priceLabel}>/mo (PCP)</span>
                </div>
                <div className={styles.priceCalculate}>
                    <div className={styles.priceFull}>£23,300</div>
                    <div className={styles.calculate}>Calculate</div>
                </div>
            </div>
        </div>
    );
}
