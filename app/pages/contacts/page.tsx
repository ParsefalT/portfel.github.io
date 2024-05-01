import { Footer } from "app/components/appMiddle";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contacts",
	description: "Contacts",
};
export default function Contacts(): JSX.Element {
	return (
		<>
			<h1 style={{ margin: "325px auto" }}>Forma</h1>
			<Footer />
		</>
	);
}
