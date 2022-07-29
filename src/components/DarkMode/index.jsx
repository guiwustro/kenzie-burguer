import Toogle from "./styles";
import { useEffect, useState } from "react";

const DarkMode = () => {
	const lightTheme = {
		"--color-background": "#FFFFFF",
		"--color-white": "#FFFFFF",
		"--color-default-white": "#FFFFFF",
		"--color-default-gray-100": "#333333",
		"--color-default-gray-30": "#c8c7c7",

		"--color-primary": "#27AE60",
		"--color-primary-50": "#93D7AF",
		"--color-secondary": "#EB5757",
		"--color-gray-100": "#333333",
		"--color-gray-50": "#828282",
		"--color-gray-30": "#c8c7c7",
		"--color-gray-20": "#E0E0E0",
		"--color-gray-0": "#F5F5F5",
	};
	// #090B0D
	const darkTheme = {
		"--color-background": "#1B1B1B",
		"--color-default-white": "#FFFFFF",
		"--color-default-gray-100": "#333333",
		"--color-default-gray-30": "#c8c7c7",

		"--color-white": "#1B1B1B",
		"--color-primary": "#27AE60",
		"--color-primary-50": "#93D7AF",
		"--color-secondary": "#EB5757",
		"--color-gray-100": "#E0E0E0",
		"--color-gray-50": "#F5F5F5",
		"--color-gray-30": "#333333",
		"--color-gray-20": "#696969",
		"--color-gray-0": "#212121",
	};

	const [isDark, setIsDark] = useState(
		JSON.parse(localStorage.getItem("@hamburgueria-kenzie:dark-theme")) || false
	);

	const setTheme = (theme) => {
		for (let keys in theme) {
			document.documentElement.style.setProperty(keys, theme[keys]);
		}
	};

	useEffect(() => {
		localStorage.setItem(
			"@hamburgueria-kenzie:dark-theme",
			JSON.stringify(isDark)
		);
	}, [isDark]);

	return (
		<Toogle className="checkbox">
			{isDark ? setTheme(darkTheme) : setTheme(lightTheme)}
			<input
				id="toggle"
				type="checkbox"
				checked={isDark}
				onChange={() => {
					setIsDark((theme) => !theme);
				}}
			/>
			<label htmlFor="toggle" className="switch"></label>
		</Toogle>
	);
};

export default DarkMode;
