import Container from "./styles";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

function Cart({ setCurrentSale, currentSale, cartTotal, setCartTotal }) {
	return (
		<Container>
			<h1>Carrinho de compras</h1>
			<div className="cart--bgc-grey">
				<ul>
					{currentSale?.map((product) => (
						<CartProduct
							setCurrentSale={setCurrentSale}
							product={product}
							currentSale={currentSale}
							key={product.id}
							setCartTotal={setCartTotal}
						/>
					))}
				</ul>
				<CartTotal
					setCartTotal={setCartTotal}
					cartTotal={cartTotal}
					setCurrentSale={setCurrentSale}
				/>
			</div>
		</Container>
	);
}
export default Cart;
