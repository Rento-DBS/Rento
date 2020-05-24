import React, { useState } from "react";
import { Button, TextField, withStyles} from "@material-ui/core/";
import styles from "./Login.module.css";

<<<<<<< HEAD

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& > *": {
//             margin: theme.spacing(2),
//             width: "25ch",
//             display: "block",
//         },
//     },
// }));
=======
const InputField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgb(28, 194, 16)',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgb(28, 194, 16)',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(28, 194, 16)',
        },
        '&:hover fieldset': {
          borderColor: 'rgb(28, 194, 16)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(28, 194, 16)',
        },
      },
    },
  })(TextField);
>>>>>>> 7119fa51be9403be49cbc68426224e59ce5fccca


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
<<<<<<< HEAD
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
=======
    return (
        <form className={styles.container}>
            <h1 className={styles.heading}>Login</h1>
            <InputField name="email" type="email" className={styles.textfield} required label="Email ID" variant="outlined"  />
            <InputField name="password" type="password" className={styles.textfield} required label="Password" variant="outlined" />
            <Button className={styles.button} >Login</Button>
        </form>
    );
>>>>>>> 7119fa51be9403be49cbc68426224e59ce5fccca
}

export default Login;
