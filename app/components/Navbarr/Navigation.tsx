"use client";
import Link from "next/link";
import styles from "./Navigation.module.css";

// ---svgrIcons---
import MoonSvg from "../../assets/icons/moon.svg";
import SunSvg from "../../assets/icons/sun.svg";

export const Navigation = () => {
	return (
		<nav className={styles["nav"]}>
			<Link href="/" className={styles["logo"]}>
				<strong>portfolio</strong>
			</Link>

			<ul className={styles["nav-list"]}>
				<li className={styles["nav-list__item"]}>
					<Link href="/" className={styles["nav-list__link nav-list__link--active"]}>
						Home
					</Link>
				</li>
				<li className={styles["nav-list__item"]}>
					<Link href="/projects" className={styles["nav-list__link"]}>
						Projects
					</Link>
				</li>
				<li className={styles["nav-list__item"]}>
					<Link href="/contacts" className={styles["nav-list__link"]}>
						Contacts
					</Link>
				</li>
			</ul>
			<button className={styles["dark-mode-btn"]}>
				<MoonSvg className={styles["dark-mode-btn__icon"]} />
				<SunSvg className={styles["dark-mode-btn__icon"]} />
			</button>
		</nav>
	);
};
