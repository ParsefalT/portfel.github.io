"use client";
import { IBtnProps } from "./BtnCustom.interface";
import cn from "classnames";
import styles from "./BtnCustom.module.css";
import { useEffect } from "react";
import { useLocaleStorage } from "hooks/useLocaleStorage";

export const BtnCustom = <IBtn extends IBtnProps>({
	className,
	value,
	type,
	children,
}: IBtn): JSX.Element => {
	const [val, setVal] = useLocaleStorage<string>("colorMode", "dark");

	const toggleDarkMode = () => {
		if (typeof setVal === "function") {
			setVal((value) => {
				return value == "light" ? "dark" : "light";
			});
		}
	};

	useEffect(() => {
		if (val == "light") {
			document.body.classList.add("light");
		} else {
			document.body.classList.remove("light");
		}
	}, [val]);

	// fetch("https://raw.githubusercontent.com/ParsefalT/linuxHellper/main/linuxHelper", {
	// 	method: "GET",
	// 	mode: "cors",
	// 	credentials: "omit",
	// 	body: null,
	// 	cache: "default",
	// 	headers: {
	// 		"Access-Control-Allow-Origin": "*",
	// 		"Content-type": "text/html; charset=utf-8",
	// 	},
	// }).then((res) => console.log(res));

	// https://raw.githubusercontent.com/ParsefalT/linuxHellper/main/linuxHelper.txt
	return (
		<button
			className={cn(styles[className], {
				[styles.mainBtn]: type == "main",
				[styles["dark-mode-btn--active"]]: val == "light",
			})}
			onClick={() => (type == "lightMode" ? toggleDarkMode() : undefined)}
		>
			{type && value}
			{children}
		</button>
	);
};
