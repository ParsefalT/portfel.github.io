"use client";
import { IBtnProps } from "./BtnCustom.interface";
import { useEffect } from "react";
import cn from "classnames";
import styles from "./BtnCustom.module.css";
import { useLocaleStorage } from "hooks/useLocaleStorage";

export const BtnCustom = <IBtn extends IBtnProps>({
	className,
	value,
	type,
	children,
}: IBtn): JSX.Element => {
	const [color, setColor] = useLocaleStorage("colorMode", "dark");

	const toggleDarkMode = () => {
		if (typeof setColor === "function") {
			setColor((color: string): string => {
				return color == "light" ? "dark" : "light";
			});
		}
	};

	useEffect(() => {
		if (color == "light") {
			document.body.classList.add("light");
		} else {
			document.body.classList.remove("light");
		}
	}, [color]);

	return (
		<button
			className={cn(styles[className], {
				[styles["mainBtn"]]: type == "main",
				[styles["dark-mode-btn--active"]]: color === "light",
			})}
			onClick={() => (type == "lightMode" ? toggleDarkMode() : undefined)}
		>
			{type && value}
			{children}
		</button>
	);
};
