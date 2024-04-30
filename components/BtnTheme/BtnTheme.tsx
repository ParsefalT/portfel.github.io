"use client";
import { IBtnThemeProps } from "./BtnTheme.interface";
import cn from "classnames";
import styles from "./BtnTheme.module.css";
import { useTheme } from "context/ThemeContext";

export const BtnTheme = <IBtn extends IBtnThemeProps>({
	className,
	children,
}: IBtn): JSX.Element => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			className={cn(styles[className], {
				[styles["dark-mode-btn--active"]]: theme == "light",
			})}
			onClick={toggleTheme}
		>
			{children}
		</button>
	);
};
