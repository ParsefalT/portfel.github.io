export const metadata = {
	title: "something",
	description: "crying",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return <>{children}</>;
}
