"use client";
import { useState, useEffect, SetStateAction } from "react";

// //get value
// export function getItemStorage(
// 	key: string,
// 	setItem: { (value: SetStateAction<string>): void; (arg0: any): void },
// ) {
// 	const value = localStorage.getItem(key) as string;
// 	localStorage.setItem(key, value);
// 	setItem(JSON.parse(value));
// }

// //set value
// export function setItemStorage(
// 	key: string,
// 	value: string,
// 	setItem: { (value: SetStateAction<string>): void; (arg0: any): void },
// ) {
// 	const valueToStore = value;
// 	localStorage.setItem(key, JSON.stringify(valueToStore));
// 	setItem(valueToStore);
// }

// export const useLocaleStorage = (key: string) => {
// 	const [state, setState] = useState("");

// 	const setValue = (value: string) => {
// 		getItemStorage(key, setState);
// 		return setItemStorage(key, value, setState);
// 	};

// 	return [state, setValue] as any;
// };
