import React, { useState } from "react";
import { Button, TextField, withStyles } from "@material-ui/core/";
import styles from "./Login.module.css";
// import Joi from "joi";
import auth from "../../services/authService";
// import { Redirect } from "react-router-dom";

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

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        console.log("logging in..");
        try {
            auth.login(username, password);
            const { state } = props.location;
            window.location = state ? state.from.pathname : "/";
            console.log("Logged in");
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                console.log("Could not login");
            }
        }
    };

    const handlePassword = (e) => {
        setUsername(e.currentTarget.value);
        setPassword(e.currentTarget.value);
    };

    const handleUsername = (e) => {
        setUsername(e.currentTarget.value);
        setPassword(e.currentTarget.value);
        // setErrors();
    };
    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h1 className={styles.heading}>Login</h1>
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
            <Button className={styles.button}>Login</Button>
        </form>
    );
};

export default Login;
