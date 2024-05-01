"use client";
/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/appMiddle";
import Cursor from "@/components/Cursor/Cursor";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/storeRedux/store";
import { sliceActions } from "@/storeRedux/slice";
import { ThemeProvider } from "context/ThemeContext";
import { Suspense, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children = null,
}: Readonly<{
	children: React.ReactNode;
}>) {
	store.dispatch(sliceActions.show("asd"));
	// const [load, setLoad] = useState(true);
	// useEffect(() => {
	// 	setTimeout(() => setLoad(false), 2500);
	// }, []);
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className} id="gang">
				<ThemeProvider>
					<Provider store={store}>
						<Cursor />
						<Navbar />
						{children}
					</Provider>
				</ThemeProvider>
			</body>
		</html>
	);
}
