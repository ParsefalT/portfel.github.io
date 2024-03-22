import React from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./LinkCustomr.module.css";
import { ILinkCustom } from "./LinkCustomr";

export const LinkCustomr = ({ src, href, width, height, alt }: ILinkCustom): JSX.Element => {
	return (
		<a href={href} target="_blank">
			<Image src={src} width={width} height={height} alt={alt} className={styles["social__icon"]} />
		</a>
	);
};
