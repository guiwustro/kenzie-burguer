import { useState } from "react";
import Container from "./styles";
function InputSearch({ setFilteredProducts, listProducts, setShowNotFound }) {
	const [productFiltered, setProductFiltered] = useState("");

	const getFilteredProduct = (e) => {
		e.preventDefault();
		const filteredList = listProducts.filter(({ name }) =>
			name.toLowerCase().includes(productFiltered.toLowerCase())
		);
		setFilteredProducts(filteredList);
		filteredList.length === 0 ? setShowNotFound(true) : setShowNotFound(false);
	};

	return (
		<Container>
			<form onSubmit={(e) => getFilteredProduct(e)}>
				<input
					onChange={(event) => setProductFiltered(event.target.value)}
					value={productFiltered}
					type="text"
					id=""
					placeholder="Digitar Pesquisa"
				/>
				<button type="submit">Pesquisar</button>
			</form>
		</Container>
	);
}
export default InputSearch;
