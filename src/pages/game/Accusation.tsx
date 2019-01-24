import React, { useContext, useEffect } from "react";
import { IGame } from "../../models/Game";
import AuthenticationContext from "../../context/authentication";
import { Button, Typography } from "@material-ui/core";

interface IProps {
	game: IGame;
}

export const Accusation = ({ game }: IProps) => {
	const { user } = useContext(AuthenticationContext);

	const accusation = game.accusations[game.accusations.length - 1];

	useEffect(() => {
		navigator.vibrate([100, 30, 100, 30, 100]);
	}, []);

	useEffect(
		() => {
			if (!user || game.host !== user._id) return;
			if (Object.values(accusation.votes).some((vote) => !vote)) {
			}
			if (Object.keys(game.players).length === Object.keys(accusation.votes).length + 1) {
			}
		},
		[accusation.votes]
	);

	if (!user) return <div>Nope</div>;

	if (accusation.accused._id === user._id) {
		return (
			<Typography variant={"body1"} align={"center"}>
				<b>{accusation.accused.name}</b> has accused you of being a spy! How do you plead?
				<br />
				Just kidding, there is no pleading here, you will be judged by your peers.
				<br />
				<br />
				Don't leave the country.
			</Typography>
		);
	}

	if (accusation.accuser._id === user._id) {
		return (
			<Typography variant={"body1"} align={"center"}>
				You have accused <b>{accusation.accused.name}</b> of being a spy!
				<br />
				A vote will be taken to determine their fate.
			</Typography>
		);
	}

	const myVote = accusation.votes.find(({ player }) => player._id === user._id);

	if (!myVote) {
		const voteGuilty = () => ({});
		const voteNotGuilty = () => ({});

		return (
			<div>
				<Typography variant={"body1"} align={"center"}>
					<b>{accusation.accuser.name}</b> has accused <b>{accusation.accused.name}</b> of being a spy!
					<br />
					You must now vote
				</Typography>
				<Button onClick={voteGuilty}>Guilty</Button>
				<Button onClick={voteNotGuilty}>Not-Guilty</Button>
			</div>
		);
	}

	return (
		<Typography variant={"body1"} align={"center"}>
			<b>{accusation.accuser.name}</b> has accused <b>{accusation.accused.name}</b> of being a spy!
			<br />
			You {myVote.vote ? "agree" : "disagree"}.
		</Typography>
	);
};
