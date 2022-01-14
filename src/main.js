import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Posts from './pages/Posts';
import Dashboard from './pages/Dashboard/CreatePost';
// import Navbar from './components/UI/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Privateroute from './pages/Private-route';

const Main = () => (
    <Router>
        {/* <Navbar /> */}
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
)


export default Main;