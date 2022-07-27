import Container from "./styles";
function CartTotal({ cartTotal }) {
	return (
		<Container>
			<p className="cart__total">Total</p>
			<p className="cart__price">R$ {cartTotal}</p>
			<button className="remove__button">Remover todos</button>
		</Container>
	);
}

export default CartTotal;
