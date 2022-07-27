import Container from "./styles";
import Logo from "../Logo";
import InputSearch from "../InputSearch";
import DarkMode from "../DarkMode";

function Header({ listProducts, setFilteredProducts, setShowNotFound }) {
	return (
		<Container>
			<Logo />
			<DarkMode />
			<InputSearch
				listProducts={listProducts}
				setFilteredProducts={setFilteredProducts}
				setShowNotFound={setShowNotFound}
			/>
		</Container>
	);
}

export default Header;
