import { useEffect } from "react";
import Product from "./styles";
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
		// ! É OBRIGATÓRIO ESSE RETURN () => Ele é executado quando a currentSale está VAZIA!! É a parte de desmontagem do carrinho
		return () => {
			setCartTotal(0);
		};
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

	const removeProduct = () => {
		setCurrentSale((old) =>
			old.filter((_, index) => indexCurrentProduct != index)
		);
		//! No caso de tentar fazer o splice direto no old ele não atualiza automaticamente! Para usar o splice nesse caso é necessário criar uma variável, herdar os parâmetros, e na sequência fazer o splice
		// let newArray = [...old];
		// newArray.splice(indexCurrentProduct, 1);
		// return newArray;
	};

	return (
		<Product>
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

			<button onClick={() => removeProduct()} className="button__remove">
				Remover
			</button>
		</Product>
	);
}

export default CartProduct;
