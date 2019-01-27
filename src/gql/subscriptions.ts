import gql from "graphql-tag";
import { fullGameSchema } from "./shared";

export const WATCH_GAME = gql`
	subscription gameUpdated($id: ID!) {
		gameUpdated(id: $id) ${fullGameSchema}
	}
`;

export const OPEN_GAMES = gql`
	subscription {
        openGames ${fullGameSchema}
	}
`;
