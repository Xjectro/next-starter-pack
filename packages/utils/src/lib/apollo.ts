import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ networkError, operation, forward }) => {
  if (networkError) {
    console.error(`[Network Error]: ${networkError}`, { operation });
  }

  return forward(operation);
});

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
  headers: {
    "Apollo-Require-Preflight": "true",
  },
  fetchOptions: {
    mode: "cors",
  },
});

const loggerLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((result) => {
    return result;
  });
});

const authLink = setContext((_, { headers }) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apollo = new ApolloClient({
  link: from([errorLink, loggerLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});

export default apollo;
