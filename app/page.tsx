import React from "react";
import styles from "./page.module.css";
import styled from "styled-components";
import cn from "classnames";

// ---svgrIcons---
import MoonSvg from "./assets/icons/moon.svg";
import SunSvg from "./assets/icons/sun.svg";
import Link from "next/link";
import { Navbar } from "react-bootstrap";
import Image from "next/image";
// function useLocation() {
// 	const [data, setData] = useState();
//  CREATE_CUSTOM_HOOK
// 	return [data, savetData];
// }
export default function Home(): JSX.Element {
	return (
		<>
			<Navbar className={styles["nav"]}>
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
			</Navbar>

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
					<a href="#!" className={styles["btn"]}>
						Download CV
					</a>
				</div>
			</header>

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

			<footer className={styles["footer"]}>
				<ul className={styles["social"]}>
					<li className={styles["social__item"]}>
						<a href="#!">
							<Image src="/images/icons/vk.svg" width={40} height={40} alt="vk" />
						</a>
					</li>
					<li className={styles["social__item"]}>
						<a href="#!">
							<Image src="/images/icons/instagram.svg" width={40} height={40} alt="instagram" />
						</a>
					</li>
					<li className={styles["social__item"]}>
						<a href="#!">
							<Image src="/images/icons/gitHub.svg" width={40} height={40} alt="gitHub" />
						</a>
					</li>
				</ul>
				<div className={styles["copyright"]}>
					<p>© 2024 web-developer.com</p>
				</div>
			</footer>
		</>
	);
}
