import React from "react";
import { IBtnrProps } from "./Btnr";
import cn from "classnames";
import styles from "./Btnrr.module.css";

export const Btnrr = ({ text, type }: IBtnrProps): JSX.Element => {
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
