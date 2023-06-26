import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Cambia la URL según la ubicación de tu servidor GraphQL
  cache: new InMemoryCache(),
});

export default client;
