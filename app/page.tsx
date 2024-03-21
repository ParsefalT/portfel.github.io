import React from "react";
import styles from "./page.module.css";
import styled from "styled-components";
import cn from "classnames";

// ---myComponents---
import { Navigation, Header, Main, Footer } from "./components/appMiddle";
// function useLocation() {
// 	const [data, setData] = useState();
//  CREATE_CUSTOM_HOOK
// 	return [data, savetData];
// }
export default function Home(): JSX.Element {
	return (
		<>
			<Navigation />
			<Header />
			<Main />
			<Footer />
		</>
	);
}
