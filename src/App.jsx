import { useContext } from "react";
import { CartContext } from "./contexts/cart";

import Global from "./styles/global";
import Container from "./styles";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ListProduct from "./components/ListProduct";

function App() {
	const { showCart } = useContext(CartContext);

	return (
		<Container showCart={showCart}>
			<Global />
			<Header />
			<ListProduct />
			{showCart && <Cart />}
		</Container>
	);
}

export default App;
