import React from "react";
import styles from "./SuccessPage.module.css";
import Tick from "../Tick/Tick";
import { bookings } from "../MyAccount/Bookings";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const SuccessPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tick}>
                <Tick />
            </div>
            <div className={styles.vl}></div>
            <div className={styles.details}>
                <div className={styles.heading}>Booking Details</div>
                <div>Booking ID: {bookings[0].bookingId}</div>
                <div>Pickup: {"Manipal"}</div>
                <div>Date: {"28/01/2020"}</div>
                <div>
                    <Link to="/home" style={{ textDecoration: "none" }}>
                        <Button className={styles.button} variant="outlined">
                            Print Receipt
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
