import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from './pages/Posts';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Privateroute from './pages/Private-route';
import client from "./apollo";

const Main = () => (
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                {/* <Route
                path="/*"
                render={(props) => {
                    if (props.location.pathname === '/signup') {
                        return '';
                    }
                    if (props.location.pathname === '/login') {
                        return '';
                    }
                    return <Navbar />;
                }}
            /> */}
                <Privateroute path="/dashboard" component={Dashboard} />
                <Route path="/" component={Posts} />
            </Switch>
        </Router>
    </ApolloProvider>
)


export default Main;