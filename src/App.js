import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Handler from './main';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Handler />
    </ApolloProvider>
  );
}

export default App;
