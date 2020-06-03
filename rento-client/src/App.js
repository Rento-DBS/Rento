import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Booking from "./components/Booking/Booking";
import styles from "./App.module.css";
import Checkout from "./components/Checkout/Checkout";
import MyAccount from "./components/MyAccount/MyAccount";
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <main className={styles.container}>
                    <Switch>
                        <Route path="/auth" component={Auth} />
                        <Route path="/home" component={Home} />
                        <Route path="/booking" component={Booking} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/my-account" component={MyAccount} />
                        {/* temp */}
                        <Redirect from="/" to="/auth" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
