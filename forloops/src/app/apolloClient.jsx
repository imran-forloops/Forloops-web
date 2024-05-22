// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://iabout.me/wp64/wp-admin/graphql", 
  }),
  cache: new InMemoryCache(),
});

export default client;
