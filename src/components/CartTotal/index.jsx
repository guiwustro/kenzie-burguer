import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Container from "./styles";
function CartTotal() {
	const { cartTotal, removeAllProducts } = useContext(CartContext);

	return (
		<Container>
			<div className="cart__line"></div>
			<p className="cart__total">Total</p>
			<p className="cart__price">R$ {cartTotal}</p>
			<button
				onClick={() => removeAllProducts()}
				className="remove-all__button"
			>
				Remover todos
			</button>
		</Container>
	);
}

export default CartTotal;
