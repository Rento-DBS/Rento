import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import SelectCar from "./components/SelectCar/SelectCar";
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="container">
                    <Switch>
                        <Route path="/auth" component={Auth} />
                        <Route path="/home" component={Home} />
                        <Route path="/select-car" component={SelectCar} />
                        {/* <Route path="/select-car" component={} /> */}
                        <Redirect from="/" to="/auth" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
