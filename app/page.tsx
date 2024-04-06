import React from "react";
import styles from "./page.module.css";
import styled from "styled-components";
import cn from "classnames";

// ---myComponents---
import { Header, Main, Footer } from "./components/appMiddle";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfel",
	description: "TestPolygon",
};

export default function Home(): JSX.Element {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}
