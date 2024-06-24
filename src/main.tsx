import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});

const ApolloAuthProvider = ({ children }: { children: any }) => {
  const authHeader = useAuthHeader();

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: authHeader || "",
      },
    };
  });

  const client = new ApolloClient({
    // @ts-ignore
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <ApolloAuthProvider>
        <App />
      </ApolloAuthProvider>
    </AuthProvider>
  </React.StrictMode>
);
