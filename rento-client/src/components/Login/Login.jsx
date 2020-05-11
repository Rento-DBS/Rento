import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& > *": {
//             margin: theme.spacing(2),
//             width: "25ch",
//             display: "block",
//         },
//     },
// }));

function SignIn() {
    const styles = {
        width: 300,
        lineHeight: 4,
        position: "absolute",
        top: "20%",
        left: "30%",
    };

    // const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div style={styles}>
            <Paper style={{ height: 350 }} elevation={3}>
                <h1
                    style={{
                        fontSize: 32,
                        height: 80,
                    }}
                >
                    Sign Up
                </h1>
                <form>
                    <TextField
                        id='outlined-basic'
                        label='Email'
                        variant='outlined'
                    />
                    <TextField
                        id='outlined-basic'
                        label='Password'
                        variant='outlined'
                    />
                    <Button
                        style={{ width: 100 }}
                        variant='contained'
                        color='primary'
                        fullWidth={false}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default SignIn;
