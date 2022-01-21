import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateOutlet from './pages/PrivateOutlet';
import client from './apollo';

const Main = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
        <Route path="/" element={<Posts />} />

        <Route path="/*" element={<PrivateOutlet />}>
          {/* <Route path="dashboard" element={Dashboard} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

export default Main;
