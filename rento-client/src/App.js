import React from "react";
import styles from "./App.module.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <div className='App'>
            <div className={styles.container} >
                <Login/>
                <Register />
            </div>
        </div>
    );
}

export default App;
