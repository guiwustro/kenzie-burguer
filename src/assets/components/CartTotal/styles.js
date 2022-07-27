import styled from "styled-components";

const Container = styled.div`
	height: 140px;
	display: grid;
	flex-direction: column;
	grid-template-areas:
		"total price"
		"removeBtn removeBtn";
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
	.remove__button {
		grid-area: removeBtn;
		height: 60px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 1rem;
		line-height: 1.2rem;
		color: var(--color-grey-20);
	}
`;

export default Container;
