import styles from "./Header.module.css";
import { BtnCustom } from "@/components/BtnCustom/BtnCustom";
export const Header = () => {
	return (
		<header className={styles["header"]}>
			<div className={styles["header__wrapper"]}>
				<h1 className={styles["header__title"]}>
					<strong>
						Hi, my name is <em>Sergey</em>
					</strong>
					<br />a Web developer
				</h1>
				<div className={styles["header__text"]}>
					<p>with passion for learning and creating.</p>
				</div>
				<BtnCustom text="Download CV" type="main" />
			</div>
		</header>
	);
};
