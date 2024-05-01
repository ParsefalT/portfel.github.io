import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState();

	useLayoutEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);
		}
		if (localTheme === "light") {
			document.body.classList.add("light");
		} else {
			document.body.classList.remove("light");
		}
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		window.localStorage.setItem("theme", newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
