import React from "react";
import styles from "./UserDetail.module.css";
import { Button, TextField, withStyles } from "@material-ui/core/";
import { Link } from "react-router-dom";
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
const UserDetail = () => {
    return (
        <div className={styles.container}>
            <InputField
                name="fullName"
                id="fullName"
                type="text"
                className={styles.textfield}
                required
                label="Full Name"
                variant="outlined"
            />
            <InputField
                name="phone"
                id="phone"
                type="text"
                className={styles.textfield}
                required
                label="Phone"
                variant="outlined"
            />
            <InputField
                name="dlNo"
                id="dlNo"
                type="text"
                className={styles.textfield}
                required
                label="DL No."
                variant="outlined"
            />
            <Link style={{ textDecoration: "none" }} to="/home">
                <Button className={styles.button}>Save</Button>
            </Link>
        </div>
    );
};

export default UserDetail;
