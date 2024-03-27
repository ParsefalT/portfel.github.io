import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T) {
	const saved = localStorage.getItem(key);
	const initial: string = saved !== null ? JSON.parse(saved) : defaultValue;
	return initial || defaultValue;
}

export const useLocaleStorage = <T>(key: string, defaultValue: T) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
};
