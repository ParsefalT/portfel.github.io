"use client";
import styles from "./Main.module.css";
import Typewriter from "typewriter-effect";
export const Main = (): JSX.Element => {
	return (
		<main className={styles["section"]}>
			<div className={styles["container"]}>
				<ul className={styles["content-list"]}>
					<li className={styles["content-list__item"]}>
						<h2 className={styles["title-2"]}>Frontend</h2>
						<Typewriter
							options={{
								strings: [
									"HTML, CSS, SCSS/SASS, BootStrap, JavaScript, TypeScript, ReactJS, Redux, NPM, MaterialUI, TailwindCSS, StyledComponents, StyleX",
								],
								autoStart: true,
								delay: 60,
								loop: true,
							}}
						/>
					</li>
					<li className={styles["content-list__item"]}>
						<h2 className={styles["title-2"]}>Backend</h2>
						<p>NodeJS, MySQL, MongoDB, PHP</p>
					</li>
				</ul>
			</div>
		</main>
	);
};
