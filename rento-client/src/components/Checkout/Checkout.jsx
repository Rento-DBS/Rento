import React, { useState, useEffect } from "react";
import Car from "../Car/Car";
import { Link } from "react-router-dom";
import { Button, TextField, withStyles } from "@material-ui/core/";
import styles from "./Checkout.module.css";
import { carsArray } from "../SelectCar/Cars";

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "rgb(28, 194, 16)",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "rgb(28, 194, 16)",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "rgb(28, 194, 16)",
            },
            "&:hover fieldset": {
                borderColor: "rgb(28, 194, 16)",
            },
            "&.Mui-focused fieldset": {
                borderColor: "rgb(28, 194, 16)",
            },
        },
    },
})(TextField);

const Checkout = () => {
    const [chargePerKm, setChargePerKm] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [promoCode, setPromoCode] = useState("");
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
                <Car
                    imageUrl={carsArray[0].imageUrl}
                    pickup={pickup}
                    dropOff={dropoff}
                    duration={duration}
                />
            </div>
            <div className={styles.vl}></div>
            <div className={styles.details}>
                <div>
                    Charge/km: <span className={styles.box}>{chargePerKm}</span>
                </div>
                <div className={styles.promoCode}>
                    PROMO CODE:
                    <InputField
                        style={{
                            width: "150px",
                            marginLeft: "20px",
                            marginTop: "5px",
                        }}
                        name="promoCode"
                        id="promoCode"
                        type="text"
                        required
                        variant="outlined"
                    />
                </div>
                <div>
                    Total Amount:{" "}
                    <span className={styles.box}>{totalAmount}</span>
                </div>
                <Link to="/payment" style={{ textDecoration: "none" }}>
                    <Button className={styles.button}>Checkout</Button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;
