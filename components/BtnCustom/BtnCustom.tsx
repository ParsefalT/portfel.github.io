import React from "react";
import { IBtnProps } from "./BtnCustom.interface";
import cn from "classnames";
import styles from "./BtnCustom.module.css";

export const BtnCustom = ({ text, type }: IBtnProps): JSX.Element => {
	return (
		<button
			className={cn(styles["btn"], {
				[styles.mainBtn]: type == "main",
			})}
		>
			{text}
		</button>
	);
};
