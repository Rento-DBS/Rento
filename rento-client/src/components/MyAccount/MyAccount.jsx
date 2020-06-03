import React from "react";
import { Router, Switch } from "react-router-dom";
import ProfileTab from "../ProfileTab/ProfileTab";
import styles from "./MyAccount.module.css";
import Profile from "../Profile/Profile";
import PastBookings from "../PastBookings/PastBookings";
import CardDetails from "../CardDetails/CardDetails";
import { user } from "./User";
import { bookings } from "./Bookings";
import { card } from "./Card";
import GoHome from "../GoHome/GoHome";

const MyAccount = () => {
    return (
        <div>
            <div>
                <ProfileTab />
            </div>
            <div className={styles.goHome}>
                <GoHome />
            </div>
            {window.location.pathname === "/my-account/profile" && (
                <div className={styles.profile}>
                    <Profile user={user} />
                </div>
            )}
            {window.location.pathname === "/my-account/past-bookings" && (
                <div className={styles.pastBookings}>
                    <PastBookings bookings={bookings} />
                </div>
            )}
            {window.location.pathname === "/my-account/card-details" && (
                <div className={styles.cardDetails}>
                    <CardDetails card={card} />
                </div>
            )}
        </div>
    );
};

export default MyAccount;
