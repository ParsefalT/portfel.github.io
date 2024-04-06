"use client";
import { IBtnProps } from "./BtnCustom.interface";
import cn from "classnames";
import styles from "./BtnCustom.module.css";

export const BtnCustom = <IBtn extends IBtnProps>({
	className,
	value,
	type,
	children,
}: IBtn): JSX.Element => {
	return (
		<button
			className={cn(styles[className], {
				[styles["mainBtn"]]: type == "main",
				// [styles["dark-mode-btn--active"]]: color == "light",
			})}
			onClick={() => (type == "lightMode" ? undefined : undefined)}
		>
			{type && value}
			{children}
		</button>
	);
};
