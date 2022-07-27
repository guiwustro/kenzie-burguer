import { useState, useEffect } from "react";
import Cart from "./assets/components/Cart";
import Header from "./assets/components/Header";
import ListProduct from "./assets/components/ListProduct";
import Container from "./styles";
import Global from "./assets/styles/global";

function App() {
	const [listProducts, setListProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
			.then((res) => res.json())
			.then((res) => setListProducts(res))
			.catch((err) => console.log(err));
	}, []);
	return (
		<Container>
			<Global />
			<Header />
			<ListProduct
				listProducts={listProducts}
				setCurrentSale={setCurrentSale}
				currentSale={currentSale}
				filteredProducts={filteredProducts}
				setFilteredProducts={setFilteredProducts}
			/>
			<Cart
				setCurrentSale={setCurrentSale}
				currentSale={currentSale}
				cartTotal={cartTotal}
				setCartTotal={setCartTotal}
			/>
		</Container>
	);
}

export default App;
