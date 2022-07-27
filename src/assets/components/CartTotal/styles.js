import styled from "styled-components";

const Container = styled.div`
	height: 140px;
	display: grid;
	flex-direction: column;
	grid-template-areas:
		"total price"
		"removeAllBtn removeAllBtn";
	padding: 20px 10px;
	.cart__total {
		grid-area: total;
		color: var(--color-grey-100);
		align-self: center;
		justify-self: start;
	}
	.cart__price {
		grid-area: price;
		align-self: center;
		color: var(--color-grey-50);
		justify-self: end;
	}
	.remove-all__button {
		grid-area: removeAllBtn;
		height: 60px;
		border-radius: 8px;
		align-self: center;
		font-weight: 600;
		font-size: 1rem;
		line-height: 1.2rem;
		background-color: var(--color-gray-20);
		color: var(--color-gray-50);
		border: 2px solid var(--color-gray-20);
		border-radius: 8px;
		&:hover {
			color: var(--color-gray-30);
			background-color: var(--color-gray-100);
			border: 2px solid var(--color-gray-100);
		}
	}
`;

export default Container;
