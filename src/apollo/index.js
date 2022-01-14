import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from cookies if it exists
    const token = Cookies.get('authToken');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
})

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL || 'http://localhost:8080'
});

const client = new ApolloClient({
    link: ApolloLink.from([authLink.concat(httpLink), errorLink]),
    cache: new InMemoryCache(),
})

export default client;