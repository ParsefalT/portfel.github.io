import styles from "./Footer.module.css";
import { LinkCustom } from "@/components/LinkCustom/LinkCustom";
import { PText } from "@/components/PText/PTextCustom";
export const Footer = (): JSX.Element => {
	return (
		<footer className={styles["footer"]}>
			<ul className={styles["social"]}>
				<li className={styles["social__item"]}>
					<LinkCustom src="/images/icons/vk.svg" href="/#" width={40} height={40} alt="vk" />
				</li>
				<li className={styles["social__item"]}>
					<LinkCustom
						src="/images/icons/instagram.svg"
						href="/#"
						width={40}
						height={40}
						alt="interesting"
					/>
				</li>
				<li className={styles["social__item"]}>
					<LinkCustom
						src="/images/icons/gitHub.svg"
						href="https://github.com/ParsefalT"
						width={40}
						height={40}
						alt="gitHub"
					/>
				</li>
			</ul>
			<div className={styles["copyright"]}>
				<PText text="© 2024 - web developer" />
			</div>
		</footer>
	);
};
