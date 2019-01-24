import { useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
	const [value, setValue] = useState(initialValue);

	const setTrue = () => {
		setValue(true);
	};

	const setFalse = () => {
		setValue(false);
	};

	return [value, setTrue, setFalse] as [boolean, () => void, () => void];
};
