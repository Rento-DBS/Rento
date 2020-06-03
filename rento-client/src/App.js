import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Booking from "./components/Booking/Booking";
import styles from "./App.module.css";
import Checkout from "./components/Checkout/Checkout";
import MyAccount from "./components/MyAccount/MyAccount";
import Payment from "./components/Payment/Payment";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import UserDetail from "./components/UserDetail/UserDetail";
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
                        <Route path="/payment" component={Payment} />
                        <Route path="/success-page" component={SuccessPage} />
                        <Route path="/user-details" component={UserDetail} />
                        <Redirect from="/" to="/auth" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
