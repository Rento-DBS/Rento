import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileTab.module.css";
const ProfileTab = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>My Account</h2>
            </div>
            <div className={styles.tabs}>
                <Link
                    style={{ textDecoration: "none" }}
                    to="/my-account/profile"
                >
                    <div className={styles.tab}>Profile</div>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    to="/my-account/past-bookings"
                >
                    <div className={styles.tab}>Past Bookings</div>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    to="/my-account/card-details"
                >
                    <div className={styles.tab}>Card Details</div>
                </Link>
            </div>
        </div>
    );
};

export default ProfileTab;
