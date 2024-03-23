import cn from "classnames";
import { IPTextProps } from "./PText.interface";

export const PText = ({ text }: IPTextProps): JSX.Element => {
	return <p>{text}</p>;
};
