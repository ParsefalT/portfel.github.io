"use client";
import { HTag } from "@/components/HTag/HTag";
import styles from "./Main.module.css";
import Typewriter from "typewriter-effect";
export const Main = (): JSX.Element => {
	return (
		<main className={styles["section"]}>
			<div className={styles["container"]}>
				<ul className={styles["content-list"]}>
					<li className={styles["content-list__item"]}>
						<HTag type="h2">Frontend</HTag>
						<div className={styles["typewriter"]}>
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
						</div>
					</li>
					{/* <li className={styles["content-list__item"]}>
						<HTag type="h2">Backend</HTag>
						<p>NodeJS, MySQL, MongoDB, PHP</p>
					</li> */}
				</ul>
			</div>
		</main>
	);
};
