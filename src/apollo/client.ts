import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import Cookie from "js-cookie";
/*const httpLink = createHttpLink({
  uri: 'https://localhost:4000/graphql',
  credentials: 'same-origin', // O 'include' si es un dominio diferente
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});*/

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache:new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
  headers: {
    authorization: Cookie.get("token") || "",
  },
});

export default client;
