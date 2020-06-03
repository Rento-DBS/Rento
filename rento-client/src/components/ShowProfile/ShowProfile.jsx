import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShowProfile.module.css";
const ShowProfile = ({ user }) => {
    return (
        <Link to="/my-account/profile">
            <div className={styles.container}>
                <img src={user.imageUrl} alt="profile" />
            </div>
        </Link>
    );
};

export default ShowProfile;
