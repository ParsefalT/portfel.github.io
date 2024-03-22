import React from "react";
import { IBtnrProps } from "./BtnCustom";
import cn from "classnames";
import styles from "./BtnCustom.module.css";

export const BtnCustom = ({ text, type }: IBtnrProps): JSX.Element => {
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
