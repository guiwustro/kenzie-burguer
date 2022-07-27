import { useEffect } from "react";
import Container from "./styles";
function CartProduct({ product, setCurrentSale, currentSale, setCartTotal }) {
	const indexCurrentProduct = currentSale.findIndex(
		({ id }) => id === product.id
	);
	const copyCurrentSale = [...currentSale];

	useEffect(() => {
		const total = currentSale
			.reduce((acc, previous) => acc + previous.amountPrice, 0)
			.toFixed(2);
		setCartTotal(total);
	}, [currentSale]);

	const updateAmountPrice = () => {
		copyCurrentSale[indexCurrentProduct].amountPrice =
			copyCurrentSale[indexCurrentProduct].amount *
			copyCurrentSale[indexCurrentProduct].price;
	};

	const addOneProduct = () => {
		copyCurrentSale[indexCurrentProduct].amount++;
		updateAmountPrice();
		setCurrentSale(copyCurrentSale);
	};
	const minusOneProduct = () => {
		if (copyCurrentSale[indexCurrentProduct].amount > 1) {
			copyCurrentSale[indexCurrentProduct].amount--;
			updateAmountPrice();
			setCurrentSale(copyCurrentSale);
		}
	};

	return (
		<Container>
			<figure>
				<img src={product.img} alt="" />
			</figure>
			<h3>{product.name}</h3>
			<p className="item__category">{product.category}</p>
			<p className="item__price">R$ {product.amountPrice.toFixed(2)}</p>
			<div className="buttons__amount">
				<button onClick={() => addOneProduct()}>+</button>
				<p>{product.amount}</p>
				<button onClick={() => minusOneProduct()}>-</button>
			</div>

			<button className="button__remove">Remover</button>
		</Container>
	);
}

export default CartProduct;
