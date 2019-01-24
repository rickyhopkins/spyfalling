import gql from "graphql-tag";

export const ADD_USER = gql`
	mutation addUser($name: String!) {
		addUser(name: $name)
	}
`;

export const CREATE_GAME = gql`
	mutation createGame($name: String!) {
		createGame(name: $name) {
			_id
			name
		}
	}
`;

export const CHANGE_SETTINGS = gql`
	mutation($id: ID!, $settings: GameSettingsInput!) {
		changeSettings(id: $id, settings: $settings) {
			_id
		}
	}
`;

export const JOIN_GAME = gql`
	mutation($id: ID!) {
		joinGame(id: $id) {
			_id
		}
	}
`;

export const START_GAME = gql`
	mutation($id: ID!) {
		startGame(id: $id) {
			_id
		}
	}
`;
