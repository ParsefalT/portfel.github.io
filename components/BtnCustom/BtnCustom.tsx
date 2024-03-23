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
		console.log(colorMode);
	};

	useEffect(() => {
		if (colorMode == true) {
			document.body.classList.add("light");
		} else {
			document.body.classList.remove("light");
		}
	}, [colorMode]);

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
