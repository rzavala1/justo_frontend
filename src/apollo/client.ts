import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookie from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookie.get("Authorization");
  return {
    headers: {
      ...headers,
      authorization: token ? ` ${token}` : '__public',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
