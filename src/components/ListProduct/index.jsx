import Container from "./styles";
import Product from "../Product";
import { useContext } from "react";
import { ListProductsContext } from "../../contexts/listProducts";
import { CartContext } from "../../contexts/cart";
import { FilterProductsContext } from "../../contexts/filterProducts";
import NotFound from "../NotFound";

function ListProduct() {
	const { listProducts } = useContext(ListProductsContext);
	const { showCart } = useContext(CartContext);
	const { showNotFound, filteredList } = useContext(FilterProductsContext);

	if (showNotFound) return <NotFound />;

	return (
		<Container showCart={showCart}>
			<ul>
				{!!filteredList.length
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
