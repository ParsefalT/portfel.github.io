import React from "react";
import { IBtnrProps } from "./Btnr";
import styles from "./Btnr.module.css";

export const Btnr = ({ text }: IBtnrProps): JSX.Element => {
	return <button className={styles["btn"]}>{text}</button>;
};
