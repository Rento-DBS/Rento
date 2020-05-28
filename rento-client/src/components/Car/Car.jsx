import React from "react";
import carImage from "../../img/car.jpg";
import styles from "./Car.module.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const Car = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={carImage} alt="car" />
            <div className={styles.attributes}>
                <h2>Fuel: {"Petrol"}</h2>
                <h2>{"Automatic"}</h2>
                <h2>Seats: {4}</h2>
            </div>
            <div className={styles.price}>
                <h2>₹{2000}</h2>
            </div>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
                <Button className={styles.button}>Book</Button>
            </Link>
        </div>
    );
};

export default Car;
