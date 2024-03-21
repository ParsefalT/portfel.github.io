"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "@/storeRedux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Portfel",
// 	description: "TestPolygon",
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
			</head>
			<Provider store={store}>
				<body className={inter.className}>{children}</body>
			</Provider>
		</html>
	);
}
