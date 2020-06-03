import React from "react";
import styles from "./Car.module.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const Car = ({
    imageUrl,
    fuel,
    gear,
    price,
    seats,
    pickup,
    dropOff,
    duration,
}) => {
    return (
        <div className={styles.container}>
            {/* <img className={styles.image} src={require(`${url}`)} alt="car" />             */}
            <img className={styles.image} src={imageUrl} alt="car" />
            <div className={styles.details}>
                <div className={styles.attributes}>
                    {fuel && <h2>Fuel: {fuel}</h2>}
                    {gear && <h2>{gear}</h2>}
                    {gear && <h2>Seats: {seats}</h2>}
                    {pickup && <h2>Pickup: {pickup}</h2>}
                    {dropOff && <h2>Drop point: {dropOff}</h2>}
                    {duration && <h2>Duration: {duration} hours</h2>}
                </div>
                {price && (
                    <div className={styles.price}>
                        <h2>₹{price}</h2>
                    </div>
                )}
            </div>
            {fuel && (
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <Button className={styles.button}>Book</Button>
                </Link>
            )}
        </div>
    );
};

export default Car;
