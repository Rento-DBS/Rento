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
<<<<<<< HEAD
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
=======
        <form className={styles.container}>
            <h1 className={styles.heading}>Register</h1>
            <InputField name="email" type="email" className={styles.textfield} required label="Email ID" variant="outlined"  />
            <InputField name="password" type="password" className={styles.textfield} required label="Password" variant="outlined" />
            <Button className={styles.button} variant="outlined" >Register</Button>
        </form>
>>>>>>> 7119fa51be9403be49cbc68426224e59ce5fccca
    );
}

export default Login;
