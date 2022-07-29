import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ListProduct from "./components/ListProduct";
import Container from "./styles";
import api from "./services/api";
import Global from "./styles/global";
import NotFound from "./components/NotFound";

function App() {
	const [listProducts, setListProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [showCart, setShowCart] = useState(false);
	const [showNotFound, setShowNotFound] = useState(false);
	useEffect(() => {
		api
			.get("/products")
			.then((res) => {
				setListProducts(res.data);
				setFilteredProducts(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		currentSale.length != 0 ? setShowCart(true) : setShowCart(false);

		return () => {
			setShowCart(false);
		};
	}, [currentSale, showCart]);

	return (
		<Container showCart={showCart}>
			<Global />
			<Header
				listProducts={listProducts}
				setFilteredProducts={setFilteredProducts}
				setShowNotFound={setShowNotFound}
			/>
			{showNotFound ? (
				<NotFound />
			) : (
				<ListProduct
					listProducts={listProducts}
					setCurrentSale={setCurrentSale}
					currentSale={currentSale}
					filteredProducts={filteredProducts}
					setFilteredProducts={setFilteredProducts}
					showCart={showCart}
				/>
			)}
			{showCart ? (
				<Cart
					setCurrentSale={setCurrentSale}
					currentSale={currentSale}
					cartTotal={cartTotal}
					setCartTotal={setCartTotal}
				/>
			) : null}
		</Container>
	);
}

export default App;
