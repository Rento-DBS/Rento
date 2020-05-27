import React from "react";
import styles from "./Home.module.css";
import { Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
// import { ArrowForwardIosIcon, PersonIcon } from "@material-ui/icons";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.person}>
                <PersonIcon className={styles.personIcon} />
            </div>
            <h1 className={styles.heading}>
                Book your ride on{" "}
                <span className={styles.subheading}>Rento</span> !
            </h1>
            <Button className={styles.button}>
                Book Now!
                <ArrowForwardIosRoundedIcon
                    color="white"
                    style={{ position: "relative", right: -30 }}
                />
            </Button>
        </div>
    );
};

export default Home;