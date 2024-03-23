import styles from "./Main.module.css";

export const Main = (): JSX.Element => {
	return (
		<main className={styles["section"]}>
			<div className={styles["container"]}>
				<ul className={styles["content-list"]}>
					<li className={styles["content-list__item"]}>
						<h2 className={styles["title-2"]}>Frontend</h2>
						<p>
							JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap,
							MaterialUI, Yarn, TailwindCSS, StyledComponents
						</p>
					</li>
					<li className={styles["content-list__item"]}>
						<h2 className={styles["title-2"]}>Backend</h2>
						<p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
					</li>
				</ul>
			</div>
		</main>
	);
};
