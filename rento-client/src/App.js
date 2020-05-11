import React from "react";
import "./App.module.css";
import { Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <div className='App'>
            <Register />
        </div>
    );
}

export default App;
