import { useState, useEffect } from "react";
import Cart from "./assets/components/Cart";
import Header from "./assets/components/Header";
import ListProduct from "./assets/components/ListProduct";
import Container from "./styles.js";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Container>
			<Header />
			<ListProduct />
			<Cart />
		</Container>
	);
}

export default App;
