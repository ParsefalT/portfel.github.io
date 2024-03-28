import { useState, useEffect } from "react";

export const useLocaleStorage = (key: string, initialValue: string) => {
	const [state, setState] = useState(initialValue);

	useEffect(() => {
		setState(() => {
			try {
				const value = localStorage.getItem(key);
				return value ? JSON.parse(value) : initialValue;
			} catch (error) {
				console.log(error);
			}
		});
	}, [state, initialValue, key]);

	const setValue = (value: (arg: string) => string) => {
		try {
			const valueToStore = value instanceof Function ? value(state) : value;
			localStorage.setItem(key, JSON.stringify(valueToStore));
			setState(value);
		} catch (error) {
			console.log(error);
		}
	};

	return [state, setValue];
};
