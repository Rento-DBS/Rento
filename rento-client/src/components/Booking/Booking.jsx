import React from "react";
import SelectCar from "../SelectCar/SelectCar";
import Filter from "../Filter/Filter";
import styles from "./Booking.module.css";
const Booking = () => {
    return (
        <div className={styles.container}>
            <Filter className={styles.filter} />
            <div className={styles.main}>
                <div className={styles.heading}>
                    <h1>Choose your Car</h1>
                </div>
                <SelectCar className={styles.selectCar} />
            </div>
        </div>
    );
};

export default Booking;
