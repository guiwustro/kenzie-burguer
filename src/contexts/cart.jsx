import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
	const [cartTotal, setCartTotal] = useState(0);
	const [currentSale, setCurrentSale] = useState([]);
	const [showCart, setShowCart] = useState(false);

	useEffect(() => {
		currentSale.length != 0 ? setShowCart(true) : setShowCart(false);
		return () => {
			setShowCart(false);
		};
	}, [currentSale, showCart]);

	useEffect(() => {
		const total = currentSale
			.reduce((acc, previous) => acc + previous.amountPrice, 0)
			.toFixed(2);

		setCartTotal(total);
		return () => {
			setCartTotal(0);
		};
	}, [currentSale]);

	const removeAllProducts = () => {
		setCurrentSale([]);
	};

	const copyCurrentSale = [...currentSale];
	const indexProduct = (currentId) =>
		currentSale.findIndex(({ id }) => id === currentId);

	const removeProduct = (currentId) => {
		const currentIndex = indexProduct(currentId);
		setCurrentSale((old) => old.filter((_, index) => currentIndex != index));
	};

	const updateAmountPrice = (currentId) => {
		const currentIndex = indexProduct(currentId);
		copyCurrentSale[currentIndex].amountPrice =
			copyCurrentSale[currentIndex].amount *
			copyCurrentSale[currentIndex].price;
		setCurrentSale(copyCurrentSale);
	};

	const addOneProduct = (currentId) => {
		const currentIndex = indexProduct(currentId);
		copyCurrentSale[currentIndex].amount++;

		setCurrentSale(copyCurrentSale);

		updateAmountPrice(currentId);
	};

	const minusOneProduct = (currentId) => {
		const currentIndex = indexProduct(currentId);

		if (copyCurrentSale[currentIndex].amount > 1) {
			copyCurrentSale[currentIndex].amount--;
			setCurrentSale(copyCurrentSale);
			updateAmountPrice(currentId);
		}
	};

	return (
		<CartContext.Provider
			value={{
				cartTotal,
				currentSale,
				setCurrentSale,
				showCart,
				removeAllProducts,
				removeProduct,
				addOneProduct,
				minusOneProduct,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
