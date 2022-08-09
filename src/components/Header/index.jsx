import Container from "./styles";
import Logo from "../Logo";
import InputSearch from "../InputSearch";
import DarkMode from "../DarkMode";

function Header({}) {
	return (
		<Container>
			<Logo />
			<DarkMode />
			<InputSearch />
		</Container>
	);
}

export default Header;
