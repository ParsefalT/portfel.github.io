import Link from "next/link";
import styles from "./Navbar.module.css";
import cn from "classnames";

// ---svgrIcons---
import MoonSvg from "../../../assets/icons/moon.svg";
import SunSvg from "../../../assets/icons/sun.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BtnCustom } from "@/components/BtnCustom/BtnCustom";

export const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className={styles["nav"]}>
			<Link href={{ pathname: "/" }} className={styles["logo"]}>
				<Image src="/images/Parsefal.png" alt="parsefal" width={250} height={50} />
			</Link>

			<ul className={styles["nav-list"]}>
				<li className={styles["nav-list__item"]}>
					<Link
						href={{ pathname: "/" }}
						className={cn(styles["nav-list__link"], {
							[styles["active"]]: pathname == "/",
						})}
					>
						Home
					</Link>
				</li>
				<li className={styles["nav-list__item"]}>
					<Link
						href={{ pathname: "/pages/projects" }}
						className={cn(styles["nav-list__link"], {
							[styles["active"]]: pathname == "/pages/projects",
						})}
					>
						Projects
					</Link>
				</li>
				<li className={styles["nav-list__item"]}>
					<Link
						href={{ pathname: "/pages/contacts" }}
						className={cn(styles["nav-list__link"], {
							[styles["active"]]: pathname == "/pages/contacts",
						})}
					>
						Contacts
					</Link>
				</li>
				{/* <li className={styles["nav-list__item"]}>
					<Link
						href={{ pathname: "/pages/recomendation" }}
						className={cn(styles["nav-list__link"], {
							[styles["active"]]: pathname == "/pages/recomendation",
						})}
					>
						Recomendation
					</Link>
				</li> */}
			</ul>

			{/* <BtnCustom type="lightMode" className="dark-mode-btn">
				<MoonSvg className={styles["dark-mode-btn__icon"]} />
				<SunSvg className={styles["dark-mode-btn__icon"]} />
			</BtnCustom> */}
		</nav>
	);
};
