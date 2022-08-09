import { useContext } from "react";
import { CartContext } from "./contexts/cart";
import { FilterProductsContext } from "./contexts/filterProducts";

import Global from "./styles/global";
import Container from "./styles";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ListProduct from "./components/ListProduct";
import NotFound from "./components/NotFound";

function App() {
	const { showCart } = useContext(CartContext);
	const { showNotFound } = useContext(FilterProductsContext);

	return (
		<Container showCart={showCart}>
			<Global />
			<Header />
			{showNotFound ? <NotFound /> : <ListProduct />}
			{showCart && <Cart />}
		</Container>
	);
}

export default App;
