"use client";
/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/storeRedux/store";
import { Navbar } from "./components/appMiddle";
import { sliceActions } from "@/storeRedux/slice";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	store.dispatch(sliceActions.show("asd"));
	return (
		<html lang="en">
			<head>
				{/* <link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
					integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
					rel="stylesheet"
				/>
			</head>
			<Provider store={store}>
				<body className={inter.className}>
					{/* <div className="wrapper"> */}
					<Navbar />
					{children}
					{/* </div> */}
				</body>
			</Provider>
		</html>
	);
}
