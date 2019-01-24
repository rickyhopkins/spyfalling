import React, { useContext } from "react";
import { IGame, Roles } from "../../models/Game";
import { PlayerList } from "./PlayerList";
import { Button, Step, StepContent, StepLabel, Stepper, Typography } from "@material-ui/core";
import AuthenticationContext from "../../context/authentication";
import { Settings } from "./Settings";
import { isAdmin } from "../../util/GameHelpers";
import { useMutation } from "react-apollo-hooks";
import { Mutations } from "../../gql";

interface IProps {
	game: IGame;
}

const steps = [
	{
		label: "Settings",
		content: (game: IGame) => <Settings game={game} />,
	},
	{
		label: "Players",
		content: (game: IGame) => {
			return (
				<>
					<Typography variant={"subtitle2"} color={"primary"}>
						Review the players
					</Typography>
					<PlayerList game={game} />
				</>
			);
		},
	},
];

export const NewGame = ({ game }: IProps) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const startGame = useMutation(Mutations.START_GAME);
	const { user } = useContext(AuthenticationContext);

	if (!user) return null;

	const onStartClick = () => {
		startGame({ variables: { id: game._id } });
	};

	if (isAdmin(game, user)) {
		return (
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, i) => (
					<Step key={step.label}>
						<StepLabel onClick={() => setActiveStep(i)}>{step.label}</StepLabel>
						<StepContent>
							{step.content(game)}
							<Button color={"primary"} onClick={() => setActiveStep(i + 1)} mini>
								Next
							</Button>
						</StepContent>
					</Step>
				))}
				<Step>
					<StepLabel onClick={() => setActiveStep(steps.length)}>Start game</StepLabel>
					<StepContent>
						<Button variant={"text"} color={"primary"} onClick={onStartClick}>
							Start
						</Button>
					</StepContent>
				</Step>
			</Stepper>
		);
	}

	return <div>Please wait</div>;
};
