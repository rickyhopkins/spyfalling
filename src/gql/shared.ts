export const fullGameSchema = `
	{
		_id
		name
		state
		location
		timerStarted
		timeRemaining
		settings {
			spyCount
			gameLength
			spyCollaboration
		}
		players {
			player {
				_id
				name
			}
			role
			score
			gameRole
		}
		accusations {
			accuser {
				_id
				name
			}
			accused {
				_id
				name
			}
			votes {
				player {
					_id
					name
				}
				vote
			}
		}
	}
`;
