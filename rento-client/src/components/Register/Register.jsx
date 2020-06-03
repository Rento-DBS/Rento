import React, { useState } from "react";
import { Button, TextField, withStyles } from "@material-ui/core/";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import * as userService from "../../services/userService";
import auth from "../../services/authService";

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

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        console.log("registering..");
        try {
            const response = await userService.register({ username, password });
            auth.loginWithJwt(response.headers["x-auth-token"]); //store the custom header in local storage which you get when you click register
            // this.props.history.push("/"); //redirect to home after registering
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                console.log("User already registered");
            }
        }
    };

    const handlePassword = (e) => {
        setPassword(e.currentTarget.value);
    };

    const handleUsername = (e) => {
        setUsername(e.currentTarget.value);
    };
    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h1 className={styles.heading}>Register</h1>
            <InputField
                onChange={handleUsername}
                name="username"
                id="username"
                type="email"
                className={styles.textfield}
                required
                label="Username"
                variant="outlined"
            />
            <InputField
                onChange={handlePassword}
                name="password"
                id="password"
                type="password"
                className={styles.textfield}
                required
                label="Password"
                variant="outlined"
            />
            <Link to="/user-details" style={{ textDecoration: "none" }}>
                <Button className={styles.button} variant="outlined">
                    Register
                </Button>
            </Link>
        </form>
    );
}

export default Register;
