import React, { useState } from "react";
import SelectCar from "../SelectCar/SelectCar";
import Filter from "../Filter/Filter";
import styles from "./Booking.module.css";
const Booking = () => {
    const [isPetrol, setIsPetrol] = useState(true);
    const [isDiesel, setIsDiesel] = useState(true);
    const [isAutomatic, setIsAutomatic] = useState(true);
    const [isManual, setIsManual] = useState(true);
    const [isFuel, setIsFuel] = useState(true);
    const [isNoFuel, setIsNoFuel] = useState(true);
    return (
        <div className={styles.container}>
            <Filter
                isPetrol={isPetrol}
                isDiesel={isDiesel}
                isAutomatic={isAutomatic}
                isManual={isManual}
                isFuel={isFuel}
                isNoFuel={isNoFuel}
                className={styles.filter}
            />
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
