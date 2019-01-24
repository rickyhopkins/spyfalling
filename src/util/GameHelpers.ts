import { IGame, Roles } from "../models/Game";
import { User } from "../context/authentication";

export const pickRandom = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

export const msToTime = (duration: number) => {
	var seconds = Math.floor((duration / 1000) % 60),
		minutes = Math.floor(duration / (1000 * 60));

	return minutes + ":" + seconds.toString().padStart(2, "0");
};

export const isAdmin = (game: IGame, user: User) => {
	const registration = game.players.find(({ player }) => player._id === user._id);

	return registration && registration.role === Roles.ADMIN;
};

export const isSpy = (game: IGame, user: User) => {
	const registration = game.players.find(({ player }) => player._id === user._id);

	return registration && registration.gameRole === "Spy";
};
