import Container from "./styles";
import Product from "../Product";
function ListProduct({ listProducts, setCurrentSale, currentSale }) {
	return (
		<Container>
			<ul>
				{listProducts?.map((product) => (
					<Product
						currentSale={currentSale}
						setCurrentSale={setCurrentSale}
						product={product}
						key={product.id}
					/>
				))}
			</ul>
		</Container>
	);
}
export default ListProduct;
