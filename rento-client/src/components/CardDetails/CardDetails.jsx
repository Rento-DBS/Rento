import React from "react";
import styles from "./CardDetails.module.css";

const CardDetails = ({ card }) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardNumber}>
                Card Number:
                <div className={styles.box}>{card.cardNumber.slice(0, 4)}</div>
                <div className={styles.box}>{card.cardNumber.slice(4, 8)}</div>
                <div className={styles.box}>{card.cardNumber.slice(8, 12)}</div>
                <div className={styles.box}>
                    {card.cardNumber.slice(12, 16)}
                </div>
            </div>
            <div className={styles.codes}>
                <div className={styles.cvv}>
                    CVV:
                    <div className={styles.box}>{card.cvv}</div>
                </div>
                <div className={styles.expiryDate}>
                    Expiry Date:
                    <div className={styles.box}>{card.expiryDate}</div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
