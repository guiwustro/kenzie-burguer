import { useContext, useEffect, useState } from "react";
import { FilterProductsContext } from "../../contexts/filterProducts";
import Container from "./styles";
function InputSearch() {
	const {
		setSearchedProduct,
		hasSearchedProduct,
		searchedProduct,
		filteredList,
		setShowNotFound,
	} = useContext(FilterProductsContext);

	const [inputSearch, setInputSearch] = useState("");

	const getFilteredProduct = (e) => {
		e.preventDefault();
		setSearchedProduct(inputSearch);
		// hasSearchedProduct();
		// ! não funciona pq??
		// (await filteredList.length) > 0
		// 	? setShowNotFound(false)
		// 	: setShowNotFound(true);
	};

	return (
		<Container>
			<form onSubmit={(e) => getFilteredProduct(e)}>
				<input
					onChange={(event) => setInputSearch(event.target.value)}
					value={inputSearch}
					type="text"
					placeholder="Digitar Pesquisa"
				/>
				<button type="submit">Pesquisar</button>
			</form>
		</Container>
	);
}
export default InputSearch;
