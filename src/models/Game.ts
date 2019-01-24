export enum GameStates {
	ENDED = "ENDED",
	PENDING = "PENDING",
	NEW = "new",
	STARTED = "started",
	PLAYING = "PLAYING",
	ACCUSING = "accusing",
	SPY_WINS = "spy_wins",
	SPY_LOSES = "spy_loses",
}

export interface IPlayer {
	_id: string;
	name: string;
	photoURL: string;
	confirmed: boolean;
	role: string;
}

interface IVote {
	player: IPlayer;
	vote: boolean;
}

export interface IAccusation {
	accuser: IPlayer;
	accused: IPlayer;
	votes: IVote[];
}

export interface IGameSettings {
	spyCount: number;
	gameLength: number;
	spyCollaboration: boolean;
}

export enum Roles {
	ADMIN = "ADMIN",
	PLAYER = "PLAYER",
}

interface IRegistration {
	player: IPlayer;
	score: number;
	role: Roles;
	gameRole: string;
}

export interface IGame {
	_id: string;
	name: string;
	location: string;
	state: GameStates;
	code: string;
	timeRemaining: number;
	timerStarted: number;
	players: IRegistration[];
	accusations: IAccusation[];
	host: string;
	spy?: string;
	settings: IGameSettings;
}

export type IGameList = {
	[key: string]: IGame;
};
