import styles from "./Footer.module.css";
import { LinkCustomr } from "@/components/LinkCustom/LinkCustomr";
export const Footer = (): JSX.Element => {
	return (
		<footer className={styles["footer"]}>
			<ul className={styles["social"]}>
				<li className={styles["social__item"]}>
					<LinkCustomr src="/images/icons/vk.svg" href="#" width={40} height={40} alt="vk" />
					{/* <a href="#!">
						<Image
							src="/images/icons/vk.svg"
							width={40}
							height={40}
							alt="vk"
							className={styles["social__icon"]}
						/>
					</a> */}
				</li>
				<li className={styles["social__item"]}>
					<LinkCustomr
						src="/images/icons/instagram.svg"
						href="#"
						width={40}
						height={40}
						alt="instagram"
					/>
					{/* <a href="#!">
						<Image
							src="/images/icons/instagram.svg"
							width={40}
							height={40}
							alt="instagram"
							className={styles["social__icon"]}
						/>
					</a> */}
				</li>
				<li className={styles["social__item"]}>
					<LinkCustomr
						src="/images/icons/gitHub.svg"
						href="https://github.com/ParsefalT"
						width={40}
						height={40}
						alt="gitHub"
					/>
					{/* <a href="https://github.com/ParsefalT" target="_blank">
						<Image
							src="/images/icons/gitHub.svg"
							width={40}
							height={40}
							alt="gitHub"
							className={styles["social__icon"]}
						/>
					</a> */}
				</li>
			</ul>
			<div className={styles["copyright"]}>
				<p>© 2024 - web developer</p>
			</div>
		</footer>
	);
};
