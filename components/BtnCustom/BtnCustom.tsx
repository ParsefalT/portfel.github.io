"use client";
import { IBtnProps } from "./BtnCustom.interface";
import cn from "classnames";
import styles from "./BtnCustom.module.css";
import { useEffect, useReducer, useState } from "react";

export const BtnCustom = <IBtn extends IBtnProps>({
	className,
	value,
	type,
	children,
}: IBtn): JSX.Element => {
	function getDefaultMode() {
		if (typeof window !== "undefined") {
			const savedMode = localStorage.getItem("mode");
			if (savedMode == "light") {
				return "light";
			} else {
				return "dark";
			}
		}
	}
	const [theme, setTheme] = useState(getDefaultMode);

	useEffect(() => {
		if (theme === "light") {
			document.body.classList.add("light");
		} else {
			document.body.classList.remove("light");
		}
		localStorage.setItem("mode", theme);
	}, [theme]);

	function toggleTheme() {
		setTheme((state: string) => {
			return state === "dark" ? "light" : "dark";
		});
	}
	return (
		<button
			className={cn(styles[className], {
				[styles["mainBtn"]]: type == "main",
				[styles["dark-mode-btn--active"]]: theme == "light",
			})}
			onClick={() => (type == "lightMode" ? toggleTheme() : undefined)}
		>
			{type && value}
			{children}
		</button>
	);
};
