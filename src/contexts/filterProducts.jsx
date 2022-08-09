import { createContext, useState, useEffect, useContext } from "react";
import { ListProductsContext } from "./listProducts";

export const FilterProductsContext = createContext({});

const FilterProductsProvider = ({ children }) => {
	const { listProducts } = useContext(ListProductsContext);
	const [showNotFound, setShowNotFound] = useState(false);
	const [searchedProduct, setSearchedProduct] = useState("");
	const [filteredList, setFilteredList] = useState([]);

	const removeAccents = (str) => {
		return str
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase();
	};

	useEffect(() => {
		setFilteredList(
			listProducts.filter(
				({ name, category }) =>
					removeAccents(name).includes(removeAccents(searchedProduct)) ||
					removeAccents(category).includes(removeAccents(searchedProduct))
			)
		);
		// ! Não consigo usar a condição de hasSearchedProduct. Quero que quando for feito a pesquisa ( Clicar no botão SUBMIT ), caso não encontre nada nesse array, ou seja a função acima seja executada, troque o setShowNotFound para true !
		// return () => {
		// 	hasSearchedProduct();
		// };
	}, [searchedProduct]);

	const hasSearchedProduct = () => {
		filteredList.length > 0 && searchedProduct
			? setShowNotFound(false)
			: setShowNotFound(true);
	};

	return (
		<FilterProductsContext.Provider
			value={{
				showNotFound,
				searchedProduct,
				setSearchedProduct,
				setShowNotFound,
				filteredList,
				hasSearchedProduct,
			}}
		>
			{children}
		</FilterProductsContext.Provider>
	);
};

export default FilterProductsProvider;
