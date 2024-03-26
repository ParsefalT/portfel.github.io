import { HTag } from "@/components/HTag/HTag";
import styles from "./Header.module.css";
import { BtnCustom } from "@/components/BtnCustom/BtnCustom";
export const Header = () => {
	return (
		<header className={styles["header"]}>
			<div className={styles["header__wrapper"]}>
				<HTag type="h1">
					<strong>
						Hi, my name is <em>Sergey</em>
					</strong>
					<br />a Web developer
				</HTag>
				<div className={styles["header__text"]}>
					<p>with passion for learning and creating.</p>
				</div>
				<a href="#" download="myCV" rel="noreferrer">
					<BtnCustom className="btn" value="Download CV" type="main" />
				</a>
			</div>
		</header>
	);
};
