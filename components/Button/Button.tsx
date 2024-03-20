import { IButton } from "./Button.props";
import styles from "./Button.module.css";
import { useContext } from "react";
import { UserContext } from "@/app/page";
import context from "react-bootstrap/esm/AccordionContext";

export function Button({ text, context }: IButton): JSX.Element {
	// const some = useContext(UserContext);
	return (
		<button>
			{text}, {context}
		</button>
	);
}
