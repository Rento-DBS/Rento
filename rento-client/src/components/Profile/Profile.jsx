import React from "react";
import styles from "./Profile.module.css";
const Profile = ({ user }) => {
    return (
        <div className={styles.container}>
            <div className={styles.profilePicture}>
                <img src={user.imageUrl} alt="profile" />
            </div>
            <div className={styles.details}>
                <div>Full Name: {user.fullName}</div>
                <div>Email ID: {user.email}</div>
                <div>Phone No: {user.phone}</div>
                <div>Driving License: {user.dlNo}</div>
            </div>
        </div>
    );
};

export default Profile;
