import React from "react";
import styles from "./UserBooking.module.css";
import { Button } from "@material-ui/core";

const UserBooking = ({ bookingId, name, date, price }) => {
    return (
        <div className={styles.container}>
            <div className={styles.bookingDetails}>
                <div className={styles.key}>
                    <div>Booking ID:</div>
                    <div>Name:</div>
                    <div>Date:</div>
                </div>
                <div className={styles.value}>
                    <div>{bookingId}</div>
                    <div>{name}</div>
                    <div>{date}</div>
                </div>
            </div>
            <div className={styles.price}>₹ {price}</div>
            <div className={styles.deleteButton}>
                <Button color="secondary">Delete</Button>
            </div>
        </div>
    );
};

export default UserBooking;
