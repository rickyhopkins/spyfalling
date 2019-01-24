import { useState } from "react";

export const useInput = <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
	initialValue: string
) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: React.ChangeEvent<T> | string) => {
		const newValue = typeof e === "string" ? e : e.target.value;
		setValue(newValue);
	};

	return {
		value,
		onChange,
	};
};
