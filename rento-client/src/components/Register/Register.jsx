import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

function Register() {
    const styles = {
        width: 300,
        lineHeight: 4,
        position: "absolute",
        top: "20%",
        right: "30%",
    };

    // const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div style={styles}>
            <Paper style={{ height: 350, backgroundColor: blue }} elevation={3}>
                <h1
                    style={{
                        fontSize: 32,
                        height: 80,
                        
                    }}
                >
                    Register
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
                        variant='outlined'
                        color='primary'
                        fullWidth={false}
                    >
                        Register
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default Register;
