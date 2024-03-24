import { ReactNode } from "react";

export interface IBtnProps {
	type?: string;
	href?: string;
	className: string;
	value?: string;
	children?: ReactNode[];
}
