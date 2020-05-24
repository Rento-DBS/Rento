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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (<>
    <h1>Login Page</h1>
        
        <form action="/login" method='POST'>
        
        
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required/>
        </div>
        
        <div>
            <label for="password">password</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit">Login</button>
        </form>
        <a href="../Register/Register">Register</a>
    </>);
}

export default SignIn;
