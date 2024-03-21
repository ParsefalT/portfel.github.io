import Image from "next/image";
import styles from "./Foter.module.css";
export const Footer = (): JSX.Element => {
	return (
		<footer className={styles["footer"]}>
			<ul className={styles["social"]}>
				<li className={styles["social__item"]}>
					<a href="#!">
						<Image
							src="/images/icons/vk.svg"
							width={40}
							height={40}
							alt="vk"
							className={styles["social__icon"]}
						/>
					</a>
				</li>
				<li className={styles["social__item"]}>
					<a href="#!">
						<Image
							src="/images/icons/instagram.svg"
							width={40}
							height={40}
							alt="instagram"
							className={styles["social__icon"]}
						/>
					</a>
				</li>
				<li className={styles["social__item"]}>
					<a href="#!">
						<Image
							src="/images/icons/gitHub.svg"
							width={40}
							height={40}
							alt="gitHub"
							className={styles["social__icon"]}
						/>
					</a>
				</li>
			</ul>
			<div className={styles["copyright"]}>
				<p>© 2024 web - developer.com</p>
			</div>
		</footer>
	);
};
