import { useEffect } from "react";
import Item from "./styles";
function Product({ product, currentSale, setCurrentSale }) {
	const addToCart = (product) => {
		const isOnSale = currentSale.some(({ id }) => id == product.id);
		const indexOnSale = currentSale.findIndex(({ id }) => id == product.id);

		const productsCartCopy = [...currentSale];
		if (isOnSale) {
			productsCartCopy[indexOnSale].amount++;
			productsCartCopy[indexOnSale].amountPrice =
				productsCartCopy[indexOnSale].amount *
				productsCartCopy[indexOnSale].price;

			return setCurrentSale(productsCartCopy);
		} else {
			product.amount = 1;
			product.amountPrice = product.price;
			setCurrentSale((oldState) => [...oldState, product]);
		}
	};
	return (
		<Item>
			<figure>
				<img src={product.img} alt={product.name} />
			</figure>
			<h3>{product.name}</h3>
			<p className="item__category">{product.category}</p>
			<p className="item__price">R$ {(+product.price).toFixed(2)} </p>
			<button onClick={() => addToCart(product)}>Adicionar</button>
		</Item>
	);
}
export default Product;
