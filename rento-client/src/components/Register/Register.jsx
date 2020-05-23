import React, { useState } from "react";
import { Button, TextField, withStyles} from "@material-ui/core/";
import styles from "./Register.module.css";

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


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form className={styles.container}>
            <h1 className={styles.heading}>Register</h1>
            <InputField name="email" type="email" className={styles.textfield} required label="Email ID" variant="outlined"  />
            <InputField name="password" type="password" className={styles.textfield} required label="Password" variant="outlined" />
            <Button className={styles.button} variant="outlined" >Register</Button>
        </form>
    );
}

export default Login;
