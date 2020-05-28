import React, { useState } from "react";
import { Button, TextField, withStyles } from "@material-ui/core/";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
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
    // const [errors, setErrors] = useState({});

    // const schema = {
    //     username: Joi.string().required().label("Username"),
    //     password: Joi.string().required().label("Password"),
    // };

    // const validate = () => {
    //     const options = { abortEarly: false };
    //     const result = Joi.validate({ username, password }, schema, options); //validate returns an
    //     if (!result.error) return null;

    //     const errors = {};
    //     for (let item of result.error.details)
    //         errors[item.path[0]] = item.message;
    //     return errors; //map an array into an object
    // };

    //validate each input
    // const validateProperty = ({ name, value }) => {
    //     // console.log(`validated${name}: ${value}`);
    //     const obj = { [name]: value }; //whatever name is at runtime that will be set to value
    //     const schema = { [name]: schema[name] };
    //     const { error } = Joi.validate(obj, schema); //we need this to abort early. pick the error property of the return value
    //     return error ? error.details[0].message : null;
    // };

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
        setPassword(e.currentTarget.value);
    };

    const handleUsername = (e) => {
        setUsername(e.currentTarget.value);
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
            <Link to="/home" style={{ textDecoration: "none" }}>
                <Button className={styles.button}>Login</Button>
            </Link>
        </form>
    );
};

export default Login;
