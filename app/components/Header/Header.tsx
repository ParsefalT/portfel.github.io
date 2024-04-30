import styles from "./Header.module.css";
import { HTag } from "@/components/HTag/HTag";
import BtnMain from "@/components/BtnMain/BtnMain";

export const Header = () => {
	return (
		<header className={styles["header"]}>
			<div className={styles["header__wrapper"]}>
				<HTag type="h1">
					<strong>
						Hi, my name is <em>Sergei</em>
					</strong>
					<br />a Web developer
				</HTag>
				<div className={styles["header__text"]}>
					<p>with passion for learning and creating.</p>
				</div>
				<a href="#" download="myCV" rel="noreferrer">
					<BtnMain className="btn" value="Download CV" typeBtn="main" />
				</a>
			</div>
		</header>
	);
};
