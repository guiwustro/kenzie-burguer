import { createContext, useState, useEffect } from "react";
import api from "../services/api";
export const ListProductsContext = createContext({});

const ListProductsProvider = ({ children }) => {
	const [listProducts, setListProducts] = useState([]);

	useEffect(() => {
		api
			.get("/products")
			.then((res) => {
				setListProducts(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<ListProductsContext.Provider value={{ listProducts }}>
			{children}
		</ListProductsContext.Provider>
	);
};

export default ListProductsProvider;
