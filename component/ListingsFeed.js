import React from 'react';
import styles from '../styles/ListingsFeed.module.css'
import Listing from './Listing'

export default function ListingsFeed() {

    const data = [
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: '2014 (64) Mercedes-Benz', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: '2014 (64) Mercedes-Benz', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: '2014 (64) Mercedes-Benz', price: '£550.90 /mo (PCP)'
        }
    ]

    return (
        <div className={styles.content}>

            {data.map(function (d, idx) {
                return (
                    <Listing name={d.model} />
                )
            })}

        </div>
    );
}
