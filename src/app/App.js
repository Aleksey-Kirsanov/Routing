import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./components/layouts/users";
import NavBar from "./components/navBar";

import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import UserPage from "./components/userPage";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route
                    path="/users/:userId"
                    render={(props) => <UserPage users={Users} {...props} />}
                />
                <Route path="/users" component={Users} />
            </Switch>
        </>
    );
}

export default App;
