import { createContext, useState } from "react";

export const FilterProductsContext = createContext({});

const FilterProductsProvider = ({ children }) => {
	const [showNotFound, setShowNotFound] = useState(false);
	const [filteredList, setFilteredList] = useState([]);

	return (
		<FilterProductsContext.Provider
			value={{
				showNotFound,
				setShowNotFound,
				filteredList,
				setFilteredList,
			}}
		>
			{children}
		</FilterProductsContext.Provider>
	);
};

export default FilterProductsProvider;
