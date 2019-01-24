import { fullGameSchema } from "./shared";
import gql from "graphql-tag";

export const GAME = gql`
    query($id: ID!) {
        game(id: $id) ${fullGameSchema}
    }
`;

export const OPEN_GAMES = gql`
	query {
		openGames {
			_id
			name
			players {
				score
			}
		}
	}
`;
