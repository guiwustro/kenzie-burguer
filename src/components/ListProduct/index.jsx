import Container from "./styles";
import Product from "../Product";
import { useContext, useEffect } from "react";
import { ListProductsContext } from "../../contexts/listProducts";
import { CartContext } from "../../contexts/cart";
import { FilterProductsContext } from "../../contexts/filterProducts";

function ListProduct() {
	const { listProducts } = useContext(ListProductsContext);
	const { showCart } = useContext(CartContext);
	const { filteredList, searchedProduct } = useContext(FilterProductsContext);

	return (
		<Container showCart={showCart}>
			<ul>
				{searchedProduct
					? filteredList?.map((product) => (
							<Product product={product} key={product.name} />
					  ))
					: listProducts?.map((product) => (
							<Product product={product} key={product.name} />
					  ))}
			</ul>
		</Container>
	);
}
export default ListProduct;
