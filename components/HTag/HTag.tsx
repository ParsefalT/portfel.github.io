import { IHTagProps } from "./HTag.interface";
import styles from "./HTag.module.css";
export const HTag = ({ type, children }: IHTagProps): JSX.Element => {
	return (
		<>
			{type == "h1" && <h1 className={styles["header__title"]}>{children}</h1>}
			{type == "h2" && <h2 className={styles["title-2"]}>{children}</h2>}
		</>
	);
};
