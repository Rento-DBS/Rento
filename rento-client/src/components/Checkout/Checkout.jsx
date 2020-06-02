import React, { useState, useEffect } from "react";
import Car from "../Car/Car";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./Checkout.module.css";

const Checkout = () => {
    const [chargePerKm, setChargePerKm] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        setChargePerKm(30);
        setTotalAmount(2750);
        setPickup("Manipal");
        setDropoff("Udupi");
        setDuration(5);
    }, [chargePerKm, totalAmount]);
    return (
        <div className={styles.container}>
            <div className={styles.bookedCar}>
                <h2 className={styles.heading}>
                    Booked{" "}
                    <span style={{ color: "rgb(28, 194, 16)" }}>Car</span>
                </h2>
                <Car pickup={pickup} dropOff={dropoff} duration={duration} />
            </div>
            <div className={styles.vl}></div>
            <div className={styles.details}>
                <h2>
                    Charge/km: <span className={styles.box}>{chargePerKm}</span>
                </h2>
                <h2>
                    Total Amount:{" "}
                    <span className={styles.box}>{totalAmount}</span>
                </h2>
                <Link to="/payment" style={{ textDecoration: "none" }}>
                    <Button className={styles.button}>Checkout</Button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;
