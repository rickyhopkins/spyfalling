import React, { Suspense } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Authentication } from "./components/Authentication";
import { Nav } from "./components/Nav";
import { ThemeProvider } from "./styles/styled-components";
import "typeface-roboto";
import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import { ApolloProvider } from "react-apollo-hooks";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, from, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";
import { Game } from "./pages/Game";

const theme = createMuiTheme({
	palette: {
		primary: deepOrange,
	},
});

const httpBase = new HttpLink({ uri: "https://spyfalling-server.herokuapp.com/graphql" });

const wsBase = new WebSocketLink({
	uri: "wss://spyfalling-server.herokuapp.com/graphql",
	options: {
		reconnect: false,
		connectionParams: { authorization: localStorage.getItem("token") || null },
	},
});

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			authorization: localStorage.getItem("token") || null,
		},
	}));

	return forward ? forward(operation) : null;
});

const httpLink = from([authMiddleware, httpBase]);
const wsLink = from([authMiddleware, wsBase]);

const link = split(
	// split based on operation type
	({ query }) => {
		const { kind, operation } = getMainDefinition(query);
		return kind === "OperationDefinition" && operation === "subscription";
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

export const App = () => {
	return (
		<ApolloProvider client={client}>
			<MuiThemeProvider theme={theme}>
				<ThemeProvider theme={theme}>
					<Suspense fallback={<div>Loading...</div>}>
						<CssBaseline />
						<Router>
							<Authentication>
								<div>
									<Nav />
									<Route exact path={"/:gameId"} component={Game} />
									<Route exact path={"/"} component={Dashboard} />
								</div>
							</Authentication>
						</Router>
					</Suspense>
				</ThemeProvider>
			</MuiThemeProvider>
		</ApolloProvider>
	);
};
