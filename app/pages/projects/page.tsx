import { PText } from "@/components/PText/PTextCustom";
import { Footer } from "app/components/appMiddle";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "Projects",
};
export default function Projects(): JSX.Element {
	return <Footer />;
}
