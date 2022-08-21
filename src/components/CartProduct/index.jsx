import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Product from "./styles";
function CartProduct({ product }) {
	const { removeProduct, addOneProduct, minusOneProduct } =
		useContext(CartContext);
	return (
		<Product>
			<figure>
				<img src={product.img} alt="" />
			</figure>
			<h3>{product.name}</h3>
			<p className="item__category">{product.category}</p>
			<p className="item__price">R$ {product.amountPrice.toFixed(2)}</p>
			<div className="buttons__amount">
				<button onClick={() => addOneProduct(product.id)}>+</button>
				<p>{product.amount}</p>
				<button onClick={() => minusOneProduct(product.id)}>-</button>
			</div>
			<button
				onClick={() => removeProduct(product.id)}
				className="button__remove"
			>
				Remover
			</button>
		</Product>
	);
}

export default CartProduct;
