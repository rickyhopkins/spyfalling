import React, { useEffect, useState } from "react";
import { GameStates, IGame } from "../../models/Game";
import { msToTime } from "../../util/GameHelpers";
import { Fab } from "@material-ui/core";
import { TimerProgress, TimerWrapper } from "./timer/styles";

interface IProps {
	game: IGame;
}

export const Timer = ({ game: { state, timeRemaining, timerStarted, settings } }: IProps) => {
	const calculateTimeRemaining = () => {
		switch (state) {
			case GameStates.PENDING:
				return settings.gameLength;
			case GameStates.PLAYING:
				console.log(new Date().getTime());
				console.log(timerStarted);
				console.log(timeRemaining);
				return timerStarted + timeRemaining - new Date().getTime();
			default:
				return timeRemaining;
		}
	};
	const [localTimeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

	useEffect(
		() => {
			if (localTimeRemaining <= 0) {
				setTimeRemaining(0);
				navigator.vibrate(300);
				return;
			}

			const tick = () => {
				setTimeRemaining(calculateTimeRemaining());
			};

			const ticker = setTimeout(tick, 1000);
			return () => clearTimeout(ticker);
		},
		[localTimeRemaining, state, timeRemaining, settings.gameLength]
	);
	const percentage = (localTimeRemaining / settings.gameLength) * 100;
	return (
		<TimerWrapper>
			<Fab color={"inherit"}>{msToTime(localTimeRemaining)}</Fab>
			<TimerProgress size={56} variant={"static"} value={percentage} />
		</TimerWrapper>
	);
};
