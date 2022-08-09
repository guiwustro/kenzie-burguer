import { useContext, useState } from "react";
import { FilterProductsContext } from "../../contexts/filterProducts";
import { ListProductsContext } from "../../contexts/listProducts";
import Container from "./styles";
function InputSearch() {
	const { listProducts } = useContext(ListProductsContext);
	const { setShowNotFound, setFilteredList } = useContext(
		FilterProductsContext
	);
	const [productSearched, setProductSearched] = useState("");

	const removeAccents = (string) => {
		return string
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase();
	};

	const getFilteredProduct = (e) => {
		e.preventDefault();
		const newList = listProducts.filter(
			({ name, category }) =>
				removeAccents(name).includes(removeAccents(productSearched)) ||
				removeAccents(category).includes(removeAccents(productSearched))
		);

		setFilteredList(newList);
		newList.length === 0 ? setShowNotFound(true) : setShowNotFound(false);
	};

	return (
		<Container>
			<form onSubmit={(e) => getFilteredProduct(e)}>
				<input
					onChange={(event) => setProductSearched(event.target.value)}
					value={productSearched}
					type="text"
					placeholder="Digitar Pesquisa"
				/>
				<button type="submit">Pesquisar</button>
			</form>
		</Container>
	);
}
export default InputSearch;
