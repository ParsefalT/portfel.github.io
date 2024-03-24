"use client";
import { IBtnProps } from "./BtnCustom.interface";
import cn from "classnames";
import styles from "./BtnCustom.module.css";
import { useEffect, useRef, useState } from "react";

export const BtnCustom = <IBtn extends IBtnProps>({
	className,
	value,
	type,
	children,
}: IBtn): JSX.Element => {
	const [colorMode, setColorMode] = useState<boolean>(false);
	const btnRef = useRef<HTMLButtonElement | null>(null);

	const toggleDarkMode = () => {
		setColorMode((state) => !state);
	};

	useEffect(() => {
		if (colorMode == true) {
			document.body.classList.add("light");
		} else {
			document.body.classList.remove("light");
		}
	}, [colorMode]);

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
			ref={btnRef}
			className={cn(styles[className], {
				[styles.mainBtn]: type == "main",
				[styles["dark-mode-btn--active"]]: colorMode,
			})}
			onClick={() => (type == "lightMode" ? toggleDarkMode() : undefined)}
		>
			{type && value}
			{children}
		</button>
	);
};
