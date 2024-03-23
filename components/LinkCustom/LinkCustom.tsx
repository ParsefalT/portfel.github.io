import React from "react";
import Image from "next/image";
import cn from "classnames";
import { ILinkCustomProps } from "./LinkCustom.interface";
import styles from "./LinkCustom.module.css";

export const LinkCustom = ({ src, href, width, height, alt }: ILinkCustomProps): JSX.Element => {
	return (
		<a href={href} target="_blank">
			<Image src={src} width={width} height={height} alt={alt} className={styles["social__icon"]} />
		</a>
	);
};
