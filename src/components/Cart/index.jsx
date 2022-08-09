import Container from "./styles";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { CartContext } from "../../contexts/cart";
import { useContext } from "react";

function Cart() {
	const { currentSale } = useContext(CartContext);
	return (
		<Container>
			<h1>Carrinho de compras</h1>
			<div className="cart--bgc-grey">
				<ul>
					{currentSale?.map((product) => (
						<CartProduct product={product} key={product.id} />
					))}
				</ul>
				<CartTotal />
			</div>
		</Container>
	);
}
export default Cart;
