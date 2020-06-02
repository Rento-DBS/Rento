import React from "react";
import carImage from "../../img/car.jpg";
import styles from "./Car.module.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const Car = ({ url, fuel, gear, price, seats }) => {
    return (
        <div className={styles.container}>
            {/* <img className={styles.image} src={require(`${url}`)} alt="car" />             */}
            <img className={styles.image} src={carImage} alt="car" />
            <div className={styles.attributes}>
                <h2>Fuel: {fuel}</h2>
                <h2>{gear}</h2>
                <h2>Seats: {seats}</h2>
            </div>
            <div className={styles.price}>
                <h2>₹{price}</h2>
            </div>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
                <Button className={styles.button}>Book</Button>
            </Link>
        </div>
    );
};

export default Car;
