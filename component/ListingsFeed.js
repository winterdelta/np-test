import React from 'react';
import styles from '../styles/ListingsFeed.module.css'
import Listing from './Listing'

export default function ListingsFeed() {

    const data = [
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: '2014 (64) Mercedes-Benz', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1095785/peugeot-208-hatchback-12-vti-active-5dr-00318617-Vwe1f1XC.jpg", model: '2020 (20) Peugeot 208', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1112929/conversions/large.jpg", model: '2019 (19) Renault Zoe', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1093351/vauxhall-corsa-se-14-se-5dr-00318518-FKIBx0eH.jpg", model: '2014 (64) Mercedes-Benz', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: 'Value your car', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: '2019 (19) Renault Zoe', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: '2014 (64) Mercedes-Benz', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: '2020 (20) Peugeot 208', price: '£550.90 /mo (PCP)'
        },
        {
            image: "https://apex4-production.s3.eu-west-1.amazonaws.com/tenant_c6c1a765-8ab5-439e-bae5-1df553fe98e8/media/1082853/conversions/large.jpg", model: '2019 (19) Renault Zoe', price: '£550.90 /mo (PCP)'
        },
    ]

    return (
        <div className={styles.content}>

            {data.map(function (d, idx) {
                return (
                    <Listing image={d.image} name={d.model} />
                )
            })}

        </div>
    );
}
