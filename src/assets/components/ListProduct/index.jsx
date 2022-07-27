import Container from "./styles";
import Product from "../Product";
function ListProduct({
	listProducts,
	setCurrentSale,
	currentSale,
	setFilteredProducts,
	filteredProducts,
	showCart,
}) {
	return (
		<Container showCart={showCart}>
			<ul>
				{filteredProducts?.map((product) => (
					<Product
						currentSale={currentSale}
						setCurrentSale={setCurrentSale}
						product={product}
						showCart={showCart}
						key={product.id}
					/>
				))}
			</ul>
		</Container>
	);
}
export default ListProduct;
