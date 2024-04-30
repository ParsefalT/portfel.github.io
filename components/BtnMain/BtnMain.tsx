import { IBtnMainProps } from "./BtnMain.props";
import cn from "classnames";
import styles from "./BtnMain.module.css";
const BtnMain = <IBtn extends IBtnMainProps>({ className, value, typeBtn }: IBtn): JSX.Element => {
	return (
		<button
			className={cn(styles[className], {
				[styles["mainBtn"]]: typeBtn == "main",
			})}
		>
			{value}
		</button>
	);
};

export default BtnMain;
